import{j as r,M as s}from"./iframe-C6LjohtU.js";import{P as p}from"./pdf-viewer-jjvspOxx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BXaf9keX.js";import"./preload-helper-GD_-jSvs.js";import"./PdfViewer-8KObv34u.js";import"./index-Dl2NjNEw.js";import"./BasePdfViewer-ljwnteo1.js";import"./BasePdfViewer.module.css-Bzd2OAzW.js";import"./PdfViewerAnnotationLayer-DG5CfIX1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D_xVWpbj.js";import"./PdfViewerOutlineSidebar-CrAdTTDa.js";import"./PdfViewerSidebarHeader-BQJYl5vL.js";import"./useBaseUiId-Cap-PPpy.js";import"./useControlled-BmDrUstA.js";import"./CompositeRoot-C4Oes3s2.js";import"./CompositeItem-DAAqOuWb.js";import"./ToolbarRootContext-DXm6j23Z.js";import"./composite-BaoR0w31.js";import"./svgIconContainer-B8ItPc1M.js";import"./PdfViewerSearchBar-BYuNjsQb.js";import"./chevron-up-DrY3AwAF.js";import"./chevron-down-7dkGHUAP.js";import"./cross-DaW6OMzU.js";import"./PdfViewerSidebar-D7yOHvCa.js";import"./index--rDorTVG.js";import"./index-cI1ynK4N.js";import"./index-CDYomSyo.js";import"./PdfViewerToolbar-bN9gFfXZ.js";import"./Button-PZls5hRh.js";import"./chevron-right-DaJR8a2D.js";import"./Input-B249MGbk.js";import"./search-mbcTQJkq.js";import"./spin-xVVynnww.js";import"./error-DQ-bOeSn.js";import"./withOsdkMetrics-DmxFMu7G.js";import"./makeExternalStore-BQYgEbL5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
