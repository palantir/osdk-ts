import{j as r,M as s}from"./iframe-kWD-jdIM.js";import{P as p}from"./pdf-viewer-BbaTciFZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BNSaa4gg.js";import"./preload-helper-BYIpTBn0.js";import"./PdfViewer-CBaZkEBd.js";import"./index-DHpWRKQv.js";import"./BasePdfViewer-DobxSq2B.js";import"./BasePdfViewer.module.css-fEHu4Byx.js";import"./PdfViewerAnnotationLayer-DHHnYI6N.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CZZmcR-O.js";import"./PdfViewerOutlineSidebar-Bng8G-Tu.js";import"./PdfViewerSidebarHeader-DRCf2CUs.js";import"./useBaseUiId-C60jF_o-.js";import"./useControlled-u0KjilF0.js";import"./CompositeRoot-BitI4MVN.js";import"./CompositeItem-BYdOgjmY.js";import"./ToolbarRootContext-QHke1z2n.js";import"./composite-BmOV-aCZ.js";import"./svgIconContainer-B8XSgAJk.js";import"./PdfViewerSearchBar-Bo3Kj95l.js";import"./chevron-up-9p6rbyB0.js";import"./chevron-down-B5rYpa0g.js";import"./cross-BSGzHacU.js";import"./PdfViewerSidebar-CvW2pj9Y.js";import"./index-B2Y0AFjL.js";import"./index-DMVcTELQ.js";import"./index-D6dW0J7N.js";import"./PdfViewerToolbar-B314sR34.js";import"./Button-B37N9Ve_.js";import"./chevron-right-OreJ2MM4.js";import"./Input-DOuHVujQ.js";import"./search-Xv8sEjS-.js";import"./spin-Ct70dHJD.js";import"./error-DarRpeI1.js";import"./withOsdkMetrics-CKT8uRvg.js";import"./makeExternalStore-V_raLWeu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
