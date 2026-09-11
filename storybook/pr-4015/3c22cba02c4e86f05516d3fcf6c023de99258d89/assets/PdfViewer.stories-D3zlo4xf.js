import{j as r,M as s}from"./iframe-ME9jEV4B.js";import{P as p}from"./pdf-viewer-qjnl2vVh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-YrwDcI89.js";import"./preload-helper-CAlbxuMw.js";import"./PdfViewer-0PaeCmC7.js";import"./index-BwQPjFr5.js";import"./BasePdfViewer-CRtaMkYC.js";import"./BasePdfViewer.module.css-pQhcoGI4.js";import"./PdfViewerAnnotationLayer-KfUh-fjL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BC2rUamn.js";import"./PdfViewerOutlineSidebar-CTgiqCLI.js";import"./PdfViewerSidebarHeader-Y_GeUqy3.js";import"./useBaseUiId-BRBkTzbz.js";import"./useControlled-BiaTOKvQ.js";import"./CompositeRoot-Brjb4gET.js";import"./CompositeItem-CxooWEv2.js";import"./ToolbarRootContext-DM1MG67c.js";import"./composite-DGm-qDkX.js";import"./svgIconContainer-C0iDRr5R.js";import"./PdfViewerSearchBar-Cq4Ix3AU.js";import"./chevron-up-4p7biAv6.js";import"./chevron-down-6_LddkfR.js";import"./cross-BDVa-Vs8.js";import"./PdfViewerSidebar-CfCl8w2R.js";import"./index-D7oNMiqq.js";import"./index-BfDcgSaT.js";import"./index-By_4WpJv.js";import"./PdfViewerToolbar-DPnTX3Gr.js";import"./Button-Da4t_kgJ.js";import"./chevron-right-Bm9tYUwJ.js";import"./Input-CE0w_ENc.js";import"./search-Dg6pBwm_.js";import"./spin-Dm6DCEEL.js";import"./error-Y3Mhwjiz.js";import"./withOsdkMetrics-DcyxtP_A.js";import"./makeExternalStore-DFLhgaAs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
