import{j as r,M as s}from"./iframe-KzP54st8.js";import{P as p}from"./pdf-viewer-D00b5MJg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BeodNZSx.js";import"./preload-helper-CZ0_peag.js";import"./PdfViewer-D3-uB7yk.js";import"./index-B5nqBBWp.js";import"./BasePdfViewer-BcoF5F3E.js";import"./BasePdfViewer.module.css-BgYeE_Q7.js";import"./PdfViewerAnnotationLayer-RKHi9tUp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CwZHtxEe.js";import"./PdfViewerOutlineSidebar-DeEjHJty.js";import"./PdfViewerSidebarHeader-CDC6jPY9.js";import"./useBaseUiId-BA1-4W3F.js";import"./useControlled-DYaDm29f.js";import"./CompositeRoot-DBRO5K0z.js";import"./CompositeItem-5AIUt4bR.js";import"./ToolbarRootContext-xfunMS_N.js";import"./composite-CfrzbkGj.js";import"./svgIconContainer-B_IEjFSj.js";import"./PdfViewerSearchBar-Bi_8cLQM.js";import"./chevron-up-BJLKBzHn.js";import"./chevron-down-C83fmB_G.js";import"./cross-lnMk7dXt.js";import"./PdfViewerSidebar-CcVE_xx9.js";import"./index-BRJV35Oa.js";import"./index-Br5P7C2V.js";import"./index-BMXD2udq.js";import"./PdfViewerToolbar-BN1GL862.js";import"./Button-DwGnaIDL.js";import"./chevron-right-Dm5O3QCc.js";import"./Input-C6qaftyN.js";import"./search-Cb-crZIr.js";import"./spin-BjsZ--Nj.js";import"./error-CnxGfdHo.js";import"./withOsdkMetrics-DzdVKn4L.js";import"./makeExternalStore-DSq9r9yQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
