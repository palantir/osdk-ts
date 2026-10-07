import{j as r,M as s}from"./iframe-BV8H6lRC.js";import{P as p}from"./pdf-viewer-BiJkPPEh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B6dDsp7i.js";import"./preload-helper-FghdvxpP.js";import"./PdfViewer-B0RjDTuo.js";import"./index-DU9RRfrb.js";import"./BasePdfViewer-B4G3EUmX.js";import"./BasePdfViewer.module.css-BZmq6QIG.js";import"./PdfViewerAnnotationLayer-BHuXui-j.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B_VcMN3g.js";import"./PdfViewerOutlineSidebar-CmzAfdKK.js";import"./PdfViewerSidebarHeader-hTneTus5.js";import"./useBaseUiId-Bch4RCf-.js";import"./useControlled-DFgYtmw-.js";import"./CompositeRoot-CPs-Y_e9.js";import"./CompositeItem-CfY4xOZ4.js";import"./ToolbarRootContext-B0zqLD7S.js";import"./composite-6jNJwuj9.js";import"./svgIconContainer-B2TLggqZ.js";import"./PdfViewerSearchBar-BYyPjfps.js";import"./chevron-up-Bb5GS6oZ.js";import"./chevron-down-CmiHvm8d.js";import"./cross-D92mjgqE.js";import"./PdfViewerSidebar-iY0Wqrjv.js";import"./index-BSOrQZ_c.js";import"./index-fE68LmNS.js";import"./index-ByctvPor.js";import"./PdfViewerToolbar-Cse695cK.js";import"./Button-cZssApwN.js";import"./chevron-right-UpjaBuyL.js";import"./Input-B3KKnPgU.js";import"./search-BlhwHZiG.js";import"./spin-CG9sDkVY.js";import"./error-Bt7eKOT3.js";import"./withOsdkMetrics-ybYt3TTQ.js";import"./makeExternalStore-DXngIb0h.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
