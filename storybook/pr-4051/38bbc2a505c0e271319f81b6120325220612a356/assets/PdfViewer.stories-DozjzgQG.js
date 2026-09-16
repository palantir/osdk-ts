import{j as r,M as s}from"./iframe-B9FGe5wd.js";import{P as p}from"./pdf-viewer-BIqdUsem.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C5-5PLaT.js";import"./preload-helper-BIve45PS.js";import"./PdfViewer-B9C2Ztyk.js";import"./index-B6Sv1VZS.js";import"./BasePdfViewer-BkHhGvJw.js";import"./BasePdfViewer.module.css-D31PThsh.js";import"./PdfViewerAnnotationLayer-CW_w1ohB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BfqJjweL.js";import"./PdfViewerOutlineSidebar-DF9D5hx-.js";import"./PdfViewerSidebarHeader-CcSc2idt.js";import"./useBaseUiId-DfSj_XIi.js";import"./useControlled-c-18TxdJ.js";import"./CompositeRoot-Dc9JyptG.js";import"./CompositeItem-D_joThID.js";import"./ToolbarRootContext-ClYwCpcv.js";import"./composite-DHxnLj2Y.js";import"./svgIconContainer-CaF_wsik.js";import"./PdfViewerSearchBar-B9qFS0RH.js";import"./chevron-up-xhbdgnGk.js";import"./chevron-down-BJC3N-Xj.js";import"./cross-D3t_et5l.js";import"./PdfViewerSidebar-CWtZFe12.js";import"./index-BT_l51Su.js";import"./index-BkBeEw9r.js";import"./index-DrrLP325.js";import"./PdfViewerToolbar-BBqHvv5z.js";import"./Button-D3RbxwJA.js";import"./chevron-right-DcEdhTQo.js";import"./Input-Dxr70xfD.js";import"./search-oVgFpE2T.js";import"./spin-BaMDVgfx.js";import"./error-DJQGwxmj.js";import"./withOsdkMetrics-Bxy0f18Y.js";import"./makeExternalStore-hUZ9hqeg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
