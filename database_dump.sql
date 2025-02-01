--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2
-- Dumped by pg_dump version 17.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: projects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.projects (
    id integer NOT NULL,
    name character varying(255),
    country character varying(100),
    image text,
    price_per_ton numeric(10,2),
    offered_volume_in_tons numeric(10,2),
    distribution_weight numeric(10,4),
    supplier_name character varying(255),
    earliest_delivery date,
    description text
);


ALTER TABLE public.projects OWNER TO postgres;

--
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.projects_id_seq OWNER TO postgres;

--
-- Name: projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;


--
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.projects VALUES (1, 'EverGreen CarbonScape', 'Germany', 'https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Fugitives/38bb530f5caf513be9f2a41f2d909f47-min.jpeg', 650.00, 15.00, 0.0500, 'Klom', '2023-09-01', 'The "EverGreen CarbonScape" project is dedicated to combatting climate change by restoring and preserving vital forest ecosystems. Through reforestation, afforestation, and sustainable forest management, we aim to create robust carbon sinks while promoting biodiversity, engaging local communities, and preventing deforestation.');
INSERT INTO public.projects VALUES (2, 'VerdeCarbon', 'India', 'https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Mineralisation/ben-karpinski-ctWw2S9VqOI-unsplash-min.jpg', 200.00, 900.00, 0.1000, 'Klom', '2022-04-01', 'A transformative carbon credit project dedicated to revitalizing ecosystems and fighting climate change. By strategically planting native trees and adopting sustainable forest practices, we''re creating a potent solution that not only absorbs carbon dioxide but also nurtures biodiversity and empowers local communities. Through verified carbon credits, VerdeCarbon is a beacon of environmental stewardship and positive impact.');
INSERT INTO public.projects VALUES (3, 'SustainaForest Carbon', 'Brazil', 'https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Afforestation+reforestation/marita-kavelashvili-ugnrXk1129g-unsplash-min.jpg', 50.85, 1500.00, 0.1500, 'EcoCarbon', '2024-01-01', 'The "SustainaForest Carbon" project tackles climate change by restoring and protecting vital forest ecosystems. Through reforestation, sustainable management, and community engagement, we''re creating resilient carbon sinks that benefit the environment, biodiversity, and local communities. Verified carbon credits will be generated as we capture CO2, fostering a sustainable future for all.');
INSERT INTO public.projects VALUES (4, 'EcoRespire', 'India', 'https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Climate+fund/climate-fund.png', 25.00, 1100.00, 0.2500, 'Pure Planet', '2023-05-15', 'A project dedicated to revitalizing our planet by rejuvenating and conserving critical forest ecosystems. By planting native trees, practicing sustainable forest management, and engaging with local communities, EcoRespire aims to capture carbon dioxide, promote biodiversity, and empower communities. Verified carbon credits will be generated, offering a sustainable solution to combat climate change while fostering environmental and societal well-being.');
INSERT INTO public.projects VALUES (5, 'EverGreen Carbon', 'Egipt', 'https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Renewable+energy/andreas-gucklhorn-Ilpf2eUPpUE-unsplash-min.jpg', 10.50, 16000.00, 0.4500, 'Carbon Solutions', '2023-12-01', 'The "EverGreen Carbon" project is a transformative carbon credit initiative aimed at restoring and maintaining vital forest ecosystems. Through reforestation, afforestation, and sustainable forest management, we will sequester significant carbon dioxide, enhance biodiversity, empower local communities, and combat deforestation. Verified carbon credits will be generated, reflecting the project''s positive impact on the environment. Join us in creating a sustainable and greener future with EverGreen Carbon.');


--
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.projects_id_seq', 1, false);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

