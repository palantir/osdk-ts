import{j as r,M as s}from"./iframe-C_XIQRaj.js";import{P as p}from"./pdf-viewer-xLsnwqqg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ZnI65ELp.js";import"./preload-helper-yovbOiJH.js";import"./PdfViewer-LRegdErn.js";import"./index-BeXNZw_x.js";import"./BasePdfViewer-BYXsLAeO.js";import"./BasePdfViewer.module.css-BG-XBenb.js";import"./PdfViewerAnnotationLayer-5iGJVIlc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BP1tCZZH.js";import"./PdfViewerOutlineSidebar-q4usq0ww.js";import"./PdfViewerSidebarHeader-Cmt17UfE.js";import"./useBaseUiId-8inAF2n-.js";import"./useControlled-Ch9SndTb.js";import"./CompositeRoot-CX9I95ju.js";import"./CompositeItem-BQROqFNc.js";import"./ToolbarRootContext-gbYyGpWk.js";import"./composite-DGI-ix3e.js";import"./svgIconContainer-BNlRuGAK.js";import"./PdfViewerSearchBar-Br9x2CRS.js";import"./chevron-up-sVD5NXy-.js";import"./chevron-down-9VTaJsMC.js";import"./cross-CUZU2tfy.js";import"./PdfViewerSidebar-DAjgwdvw.js";import"./index-DW1hnjgV.js";import"./index-BLFOZToo.js";import"./index-BLHmTRj_.js";import"./PdfViewerToolbar-zVQZtNS4.js";import"./Button-dB7_sFTC.js";import"./chevron-right-BXqAu5Yc.js";import"./Input-DAnQbmer.js";import"./search-BE01uCTT.js";import"./spin-DvDp5OEa.js";import"./error-B-SAi68c.js";import"./withOsdkMetrics-CVYgQ3H4.js";import"./makeExternalStore-CTMv2DMh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
