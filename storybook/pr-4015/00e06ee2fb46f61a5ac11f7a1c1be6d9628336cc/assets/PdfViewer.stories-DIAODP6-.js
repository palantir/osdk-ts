import{j as r,M as s}from"./iframe-BqB00GiJ.js";import{P as p}from"./pdf-viewer-_FSs7auI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ykcP2j7z.js";import"./preload-helper-CBNowE1F.js";import"./PdfViewer-CLvFrAce.js";import"./index-B6ljFb81.js";import"./BasePdfViewer-EwDFWNgd.js";import"./BasePdfViewer.module.css-DPxEdTkM.js";import"./PdfViewerAnnotationLayer-C2k8aE7q.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BD9UUA9v.js";import"./PdfViewerOutlineSidebar-D0gkw1Qp.js";import"./PdfViewerSidebarHeader-tHWGotZV.js";import"./useBaseUiId-BOd5ixEm.js";import"./useControlled-BB4FINPW.js";import"./CompositeRoot-DLUsHFmN.js";import"./CompositeItem-E84gf2Yn.js";import"./ToolbarRootContext-B0-kN55K.js";import"./composite-pnQuH5Q_.js";import"./svgIconContainer-BKScRVgJ.js";import"./PdfViewerSearchBar-zYrBzXsK.js";import"./chevron-up-r4yG7OBX.js";import"./chevron-down-DmxY4RQH.js";import"./cross-NroKy72c.js";import"./PdfViewerSidebar-CAsmqADd.js";import"./index-DIoCyghZ.js";import"./index-HDQn5rHu.js";import"./index-Bn4ERW5E.js";import"./PdfViewerToolbar-sF2nNXpz.js";import"./Button-UzxjVW7Z.js";import"./chevron-right-FjwLHPvC.js";import"./Input-BuKObC1x.js";import"./search-Bz2m71mS.js";import"./spin-Blirq0HD.js";import"./error-D0GZGtsZ.js";import"./withOsdkMetrics-D9LjqIyU.js";import"./makeExternalStore-CanGYDv6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
