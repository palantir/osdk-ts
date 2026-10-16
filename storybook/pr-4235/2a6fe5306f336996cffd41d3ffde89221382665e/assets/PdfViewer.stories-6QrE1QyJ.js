import{j as r,M as s}from"./iframe-Dz-3bopY.js";import{P as p}from"./pdf-viewer-D9t3Jm7w.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DT3wBWKp.js";import"./preload-helper-DyKBZj2x.js";import"./PdfViewer-ztdAXrmK.js";import"./index-DXk5AkRu.js";import"./BasePdfViewer-8G0zK0oa.js";import"./BasePdfViewer.module.css-CiINk9yw.js";import"./PdfViewerAnnotationLayer-DNjp7g3z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DE3jD7zk.js";import"./PdfViewerOutlineSidebar-BNn15tHi.js";import"./PdfViewerSidebarHeader-Co05XmFp.js";import"./useBaseUiId-DdDMVRT4.js";import"./useControlled-BicNl6JT.js";import"./CompositeRoot-Cn2oP6nd.js";import"./CompositeItem-DkOqAvvV.js";import"./ToolbarRootContext-Bdn-bZ42.js";import"./composite-CeOULy3_.js";import"./svgIconContainer-VUnqKTqj.js";import"./PdfViewerSearchBar-D-JUaCpU.js";import"./chevron-up-DOQZQn2y.js";import"./chevron-down-CtwdWDe5.js";import"./cross-BV1ilYHG.js";import"./PdfViewerSidebar-Br5aT4HQ.js";import"./index-DDGzWdyM.js";import"./index-Cd6ys6N0.js";import"./index-CESOHnLX.js";import"./PdfViewerToolbar-Ck7qQvVC.js";import"./Button-CYhmyUyk.js";import"./chevron-right-Rm4XSKGW.js";import"./Input-BShSfu0I.js";import"./search-C0Oo-5ck.js";import"./spin-C69x-DrP.js";import"./error-DDZrlFGO.js";import"./withOsdkMetrics-CGeg0cBL.js";import"./makeExternalStore-BqALFL7i.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
