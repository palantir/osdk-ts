import{j as r,M as s}from"./iframe-a31F6Zea.js";import{P as p}from"./pdf-viewer-BMHE1lxH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CBqGBtTK.js";import"./preload-helper-BfFj_4tp.js";import"./PdfViewer-BTEYFZQ6.js";import"./index-BnGZPYV4.js";import"./BasePdfViewer-kuQcUUkt.js";import"./BasePdfViewer.module.css-CRqxIfKQ.js";import"./PdfViewerAnnotationLayer-CX5H3LYP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DugIfHe2.js";import"./PdfViewerOutlineSidebar-DQLYf0ot.js";import"./PdfViewerSidebarHeader-WYpUoNod.js";import"./useBaseUiId-CSUeT06E.js";import"./useControlled-CN75eaZx.js";import"./CompositeRoot-DTD1nVz-.js";import"./CompositeItem-mbuOs1fC.js";import"./ToolbarRootContext-wQy2gScd.js";import"./composite-B8asvRon.js";import"./svgIconContainer-DxZS3Oh3.js";import"./PdfViewerSearchBar-B90ENdI4.js";import"./chevron-up-Jd-bDiIb.js";import"./chevron-down-hBWeBGBN.js";import"./cross-Ctxx23y-.js";import"./PdfViewerSidebar-CVatD0Tq.js";import"./index-gZqL-2oV.js";import"./index-DFESKWXH.js";import"./index-DSAvdwec.js";import"./PdfViewerToolbar-D_7QZ7XS.js";import"./Button-a8my9L0w.js";import"./chevron-right-Blnv2kDI.js";import"./Input-CBWYwmBc.js";import"./search-BWfh2RdL.js";import"./spin-_vCkVPUD.js";import"./error-C3q1XKPy.js";import"./withOsdkMetrics-B5cAgh1b.js";import"./makeExternalStore-CySlHC0C.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
