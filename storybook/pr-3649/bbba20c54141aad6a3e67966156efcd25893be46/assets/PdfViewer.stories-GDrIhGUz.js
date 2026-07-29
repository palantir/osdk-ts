import{j as r,M as s}from"./iframe-BPlyPXiZ.js";import{P as p}from"./pdf-viewer-Dlidj0Fj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B53YdLO-.js";import"./preload-helper-CVn2ue9b.js";import"./PdfRenderer-D07zlovt.js";import"./index-Ddo5UG0H.js";import"./PdfViewer-Ck47u9ue.js";import"./PdfViewer.module.css-BU09lnxV.js";import"./PdfViewerAnnotationLayer-DoIS0anT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C4_T2pI8.js";import"./PdfViewerOutlineSidebar-BxRliSp-.js";import"./PdfViewerSidebarHeader-Be4e3c4c.js";import"./useBaseUiId-X-OXSAal.js";import"./useControlled-CIhLO8zV.js";import"./CompositeRoot-D-p1-abh.js";import"./CompositeItem-CiEDn4l-.js";import"./ToolbarRootContext-DnS0zku0.js";import"./composite-IGurVqQn.js";import"./svgIconContainer-BZdLsghv.js";import"./PdfViewerSearchBar-DiZeBIZE.js";import"./chevron-up-CCUGFgQ1.js";import"./chevron-down-C6-r-URf.js";import"./cross-B2S6uBur.js";import"./PdfViewerSidebar-zn4CSoa7.js";import"./index-Da31hJ2m.js";import"./index-BZ5Z-Qo0.js";import"./index-vSWwSHiI.js";import"./PdfViewerToolbar-B7IurA8c.js";import"./Button-DZ7USJIZ.js";import"./chevron-right-DX1OWHQS.js";import"./Input-CQD2pGYW.js";import"./search-j4xQ6zka.js";import"./spin-ChrUyLVo.js";import"./error-8ZIwvoQk.js";import"./withOsdkMetrics-ByKEirKO.js";import"./makeExternalStore-B4hfq0qd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
