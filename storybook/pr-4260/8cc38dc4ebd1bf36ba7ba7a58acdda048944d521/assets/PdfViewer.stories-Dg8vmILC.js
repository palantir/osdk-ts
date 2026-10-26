import{j as r,M as s}from"./iframe-HJ0Gtc-x.js";import{P as p}from"./pdf-viewer-SFNZdGQP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-N-febkNE.js";import"./preload-helper-BOUoT_Gy.js";import"./PdfViewer-Bif6tC4k.js";import"./index-211_BqLo.js";import"./BasePdfViewer-III4KBU4.js";import"./BasePdfViewer.module.css-RjgXnXmJ.js";import"./PdfViewerAnnotationLayer-y57KjwKf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DCfkHz93.js";import"./PdfViewerOutlineSidebar-BMyImXiD.js";import"./PdfViewerSidebarHeader-CLXo5Xbh.js";import"./useBaseUiId-CeZXZ9Z0.js";import"./useControlled-C74o2pv-.js";import"./CompositeRoot-BEn1KuXL.js";import"./CompositeItem-CHrD2JLR.js";import"./ToolbarRootContext-Cec3nuK8.js";import"./composite-CuUXCjDd.js";import"./svgIconContainer-BOUC7MPM.js";import"./PdfViewerSearchBar-BRazA5yA.js";import"./chevron-up-CMNFkWrY.js";import"./chevron-down-Db91ZRmD.js";import"./cross-ChjkGLAA.js";import"./PdfViewerSidebar-KD_AfK3r.js";import"./index-BbA9vrwp.js";import"./index-CAQybw0C.js";import"./index-BPe5620H.js";import"./PdfViewerToolbar-C-tA663X.js";import"./Button-Cg7ItP1u.js";import"./chevron-right-CfnAmICL.js";import"./Input-BRC4lGnf.js";import"./search-BjFqXd51.js";import"./spin-C2Gbrlgv.js";import"./error-BQ1AWTRy.js";import"./withOsdkMetrics-DmM4mVY6.js";import"./makeExternalStore-AnzMBZSn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
