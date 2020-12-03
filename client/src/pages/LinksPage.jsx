import React, { useCallback, useContext, useEffect, useState } from 'react';
import LinksList from '../components/LinksList';
import { Loader } from '../components/Loader';
import { AuthContext } from '../Context/AuthContext';
import { useFetch } from '../hooks/useFetch';

const LinksPage = () => {
  const { request, loading } = useFetch();
  const { token } = useContext(AuthContext);
  const [links, setLinks] = useState([]);

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request('/api/link', 'GET', null, {
        Authorization: `Bearer ${token}`,
      });
      setLinks(fetched);
    } catch (error) {}
  }, [token, request]);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  if (loading) {
    return <Loader />;
  }

  return <>{!loading && <LinksList links={links} />}</>;
};

export default LinksPage;
