import{j as r,M as s}from"./iframe-BX25vaaY.js";import{P as p}from"./pdf-viewer-BCScimxH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bv356G12.js";import"./preload-helper-B4fqOqCe.js";import"./PdfViewer-DyID5XlD.js";import"./index-cHBOMeEB.js";import"./BasePdfViewer-x2dbo2M9.js";import"./BasePdfViewer.module.css-D-LUerl9.js";import"./PdfViewerAnnotationLayer-PECpwT0G.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C-jah9pk.js";import"./PdfViewerOutlineSidebar-C3RscaID.js";import"./PdfViewerSidebarHeader-B-G-ofqO.js";import"./useBaseUiId-CcSHD2go.js";import"./useControlled-CncYrOIz.js";import"./CompositeRoot-DppAllgP.js";import"./CompositeItem-CmMVOFT8.js";import"./ToolbarRootContext-aY85yZom.js";import"./composite-CR6ea9de.js";import"./svgIconContainer-CdYxDvot.js";import"./PdfViewerSearchBar-DNry9aeJ.js";import"./chevron-up-CB4ety78.js";import"./chevron-down-EEZ-gmtO.js";import"./cross-DYoAuDNi.js";import"./PdfViewerSidebar-ABCClZlT.js";import"./index-BzEoWnZU.js";import"./index-CwTTdI6G.js";import"./index-3gZ9GYf_.js";import"./PdfViewerToolbar-BXkRbRKZ.js";import"./Button-_HXzGyBt.js";import"./chevron-right-BW2k0Eca.js";import"./Input-B7_1OxfG.js";import"./search-Cq3hJNRT.js";import"./spin-BvPLirri.js";import"./error-CJ3zu-Fv.js";import"./withOsdkMetrics-WVBxLOJx.js";import"./makeExternalStore-M7acJIlW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
