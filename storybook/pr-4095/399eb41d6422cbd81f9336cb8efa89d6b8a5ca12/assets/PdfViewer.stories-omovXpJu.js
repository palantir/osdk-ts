import{j as r,M as s}from"./iframe-D9Hj5gXP.js";import{P as p}from"./pdf-viewer-COpFtyDe.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B584vxvH.js";import"./preload-helper-46igzL0d.js";import"./PdfViewer-cRlwV_q5.js";import"./index-BGKBGloN.js";import"./BasePdfViewer-CSeUb2qB.js";import"./BasePdfViewer.module.css-CJelcq4Q.js";import"./PdfViewerAnnotationLayer-BWirtDna.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C73j4qFz.js";import"./PdfViewerOutlineSidebar-Dlm9LwFq.js";import"./PdfViewerSidebarHeader-B5aksAKj.js";import"./useBaseUiId-B3UGffNT.js";import"./useControlled-Bt5_5gUM.js";import"./CompositeRoot-DERhFUms.js";import"./CompositeItem-DWvpMhCv.js";import"./ToolbarRootContext-D-kNo729.js";import"./composite-aH77Cbrs.js";import"./svgIconContainer-DUAmOtu_.js";import"./PdfViewerSearchBar-CDjOoSI-.js";import"./chevron-up-DawkhJbQ.js";import"./chevron-down-CTUGvO1x.js";import"./cross-Q-Rh6Md8.js";import"./PdfViewerSidebar-CE1gxUcn.js";import"./index-dBvJuZc1.js";import"./index-AnDVD4rM.js";import"./index-B3OkYupr.js";import"./PdfViewerToolbar-CsTspNFJ.js";import"./Button-Djg1VeWx.js";import"./chevron-right-FtdeSo8R.js";import"./Input-CbGZkwW7.js";import"./search-Itm3619L.js";import"./spin-BruYpLLQ.js";import"./error-CBRvRAY4.js";import"./withOsdkMetrics-CL-J3VAE.js";import"./makeExternalStore-BMGSmgu1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
