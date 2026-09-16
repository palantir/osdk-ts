import{j as r,M as s}from"./iframe-xdaTYGRj.js";import{P as p}from"./pdf-viewer-DNAVIt0n.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DHkDpb1g.js";import"./preload-helper-DZUDwwCn.js";import"./PdfViewer-CMJpWfPx.js";import"./index-BdPDvpnl.js";import"./BasePdfViewer-C01ZWVxN.js";import"./BasePdfViewer.module.css-ysIP3xHH.js";import"./PdfViewerAnnotationLayer-a6OUmBfE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-sLooy4_p.js";import"./PdfViewerOutlineSidebar-CD4l53he.js";import"./PdfViewerSidebarHeader-Byj7gQQN.js";import"./useBaseUiId-CxUh_Q__.js";import"./useControlled-BvC-sVWY.js";import"./CompositeRoot-Bs6SmXSZ.js";import"./CompositeItem-Cl6_46jA.js";import"./ToolbarRootContext-5SJeTWub.js";import"./composite-BBMq-zQx.js";import"./svgIconContainer-exvQzp4T.js";import"./PdfViewerSearchBar-Chg5nS8u.js";import"./chevron-up-Bbf1YR7J.js";import"./chevron-down-aagd7exO.js";import"./cross-CSoA2ZQa.js";import"./PdfViewerSidebar-DciFNHEa.js";import"./index-CUVjcwyy.js";import"./index-ChGZ1vto.js";import"./index-DjfesuTU.js";import"./PdfViewerToolbar-YqP-gY08.js";import"./Button-DhIcXnSN.js";import"./chevron-right-DiPujZJc.js";import"./Input-CVYxdw6a.js";import"./search-Ba1wUlyN.js";import"./spin-B6Fp9DIr.js";import"./error-CApwHpph.js";import"./withOsdkMetrics-D5YFfTwH.js";import"./makeExternalStore-DYC4j6Cy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
