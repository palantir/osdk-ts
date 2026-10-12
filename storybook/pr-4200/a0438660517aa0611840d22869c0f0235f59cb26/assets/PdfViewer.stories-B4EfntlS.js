import{j as r,M as s}from"./iframe-DmE1XkBG.js";import{P as p}from"./pdf-viewer-f9ObSpHA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-VGCDA29O.js";import"./preload-helper-CXlVQXKb.js";import"./PdfViewer-CrO13ATL.js";import"./index-kStVVneq.js";import"./BasePdfViewer-fe0iJSIJ.js";import"./BasePdfViewer.module.css-GRFFW3r_.js";import"./PdfViewerAnnotationLayer-BKKOfHJr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BtmMBz43.js";import"./PdfViewerOutlineSidebar-BlTSHiHj.js";import"./PdfViewerSidebarHeader-02r27seo.js";import"./useBaseUiId-BBFoTCwh.js";import"./useControlled-Ceu9BId1.js";import"./CompositeRoot-CBWEowFY.js";import"./CompositeItem-C3J_zDNM.js";import"./ToolbarRootContext-CmqDJjBa.js";import"./composite-Dj1kIl2K.js";import"./svgIconContainer-BYLHbmus.js";import"./PdfViewerSearchBar-ByjiU221.js";import"./chevron-up-CyI9h9vB.js";import"./chevron-down-Dg6DJkU-.js";import"./cross-DJt4HA-N.js";import"./PdfViewerSidebar-FAtnqA4Z.js";import"./index-BVlwO6Du.js";import"./index-ks1cIWqU.js";import"./index-DXBXi0eZ.js";import"./PdfViewerToolbar-DbjlPlnp.js";import"./Button-CjFhiXn4.js";import"./chevron-right-yJJO926x.js";import"./Input-BwNWBTCC.js";import"./search-DLAneuKN.js";import"./spin-BISZ3REH.js";import"./error-B3TY1Brr.js";import"./withOsdkMetrics-DXKPSTbY.js";import"./makeExternalStore-C84QYiDy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
