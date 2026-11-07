import{j as r,M as s}from"./iframe-DHBngpjq.js";import{P as p}from"./pdf-viewer-v3BWiM0T.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DRUxONaJ.js";import"./preload-helper-CDXIiz1j.js";import"./PdfViewer-DG9tfa4t.js";import"./index-By-FRoq9.js";import"./BasePdfViewer-Doi7QXO_.js";import"./BasePdfViewer.module.css-DdXpZH1X.js";import"./PdfViewerAnnotationLayer-DCvMr0HL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ELD2ejAK.js";import"./PdfViewerOutlineSidebar-98ba1UzN.js";import"./PdfViewerSidebarHeader-DygSjtW0.js";import"./useBaseUiId-CzQMC21v.js";import"./useControlled-BLsTwB3H.js";import"./CompositeRoot-B0E9Vg7q.js";import"./CompositeItem-CbJoHss2.js";import"./ToolbarRootContext-B_eHvjGz.js";import"./composite-uu2-UFVd.js";import"./svgIconContainer-BAywG5PI.js";import"./PdfViewerSearchBar-C4a3uMvj.js";import"./chevron-up-BhUGSrMQ.js";import"./chevron-down-D5Z6pf30.js";import"./cross-DvvrZ3YV.js";import"./PdfViewerSidebar-CU2OR5FG.js";import"./index-BTrtZCFe.js";import"./index-CTfQVRtO.js";import"./index-DVFITc1l.js";import"./PdfViewerToolbar-B8cC77Gr.js";import"./Button-HCu8xw6G.js";import"./chevron-right-Cib6axWb.js";import"./Input-Br87LXH7.js";import"./search-CiPmNh0i.js";import"./spin-B9fAxL8-.js";import"./error-CH1gecQ4.js";import"./withOsdkMetrics-DVTP8TQr.js";import"./makeExternalStore-CSHIV8LM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
