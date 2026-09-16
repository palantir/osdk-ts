import{j as r,M as s}from"./iframe-CrxwL2-E.js";import{P as p}from"./pdf-viewer-CHhEJ0us.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-r5e94SKT.js";import"./preload-helper-D8KRM-Lu.js";import"./PdfViewer-DyxLvvKd.js";import"./index-CnRzHgPn.js";import"./BasePdfViewer-YlbaJvnw.js";import"./BasePdfViewer.module.css-wYXOFxnf.js";import"./PdfViewerAnnotationLayer-C6rr1Aub.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-mb2Yj-91.js";import"./PdfViewerOutlineSidebar-CRigrY3N.js";import"./PdfViewerSidebarHeader-CHk4JsY-.js";import"./useBaseUiId-CHWsF01c.js";import"./useControlled-CMyIOoxO.js";import"./CompositeRoot-C-JCyI2S.js";import"./CompositeItem-DXFhogU1.js";import"./ToolbarRootContext-Bp3YN5W7.js";import"./composite-D_Dq2ROx.js";import"./svgIconContainer-BZaQ0M_F.js";import"./PdfViewerSearchBar-BkVEs7Lw.js";import"./chevron-up-D0Czmpz5.js";import"./chevron-down-DTO6IXlJ.js";import"./cross-tJCZU9dn.js";import"./PdfViewerSidebar-DnOdKud1.js";import"./index-BrHupWVl.js";import"./index-Bk2-PvCo.js";import"./index-C9NLr5O0.js";import"./PdfViewerToolbar-DD1bkkxn.js";import"./Button-BPy55ub1.js";import"./chevron-right-DUGFfGd_.js";import"./Input-WST8cByM.js";import"./search-KIDsIAAK.js";import"./spin-DGX_kMTT.js";import"./error-CIWz4OVj.js";import"./withOsdkMetrics-CQbNyfnl.js";import"./makeExternalStore-BiTIhgiy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
