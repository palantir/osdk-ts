import{j as r,M as s}from"./iframe-BVAvsfQX.js";import{P as p}from"./pdf-viewer-CFc5O2Ay.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dq97OZ-A.js";import"./preload-helper-BwI1TZkb.js";import"./PdfViewer-CjtaKNx1.js";import"./index-NhX7SFCA.js";import"./BasePdfViewer-C2r57M-C.js";import"./BasePdfViewer.module.css-B8lc8SZT.js";import"./PdfViewerAnnotationLayer-BuYjcXv6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-0wws9OQx.js";import"./PdfViewerOutlineSidebar-CMUgVocZ.js";import"./PdfViewerSidebarHeader-Dt-34AIy.js";import"./useBaseUiId-DNCMaGc4.js";import"./useControlled-DefMg-iO.js";import"./CompositeRoot-C0VK8q3G.js";import"./CompositeItem-D1GzGip_.js";import"./ToolbarRootContext-mIzgtd8o.js";import"./composite-BKwa0sk2.js";import"./svgIconContainer-DA2Ye4kw.js";import"./PdfViewerSearchBar-BXOsDUjz.js";import"./chevron-up-B7GAqbKU.js";import"./chevron-down-D9zeVubV.js";import"./cross-Blq0AAlZ.js";import"./PdfViewerSidebar-DLAiONSF.js";import"./index-CsgPrkQT.js";import"./index-Pg5rWMVo.js";import"./index-CZLwJ3bI.js";import"./PdfViewerToolbar-BWbDQA9L.js";import"./Button-D9hGt4n3.js";import"./chevron-right-DBrTvDTg.js";import"./Input-BfbcPKto.js";import"./search-YL3_raLw.js";import"./spin-__sEt3KL.js";import"./error-CpL1Ts52.js";import"./withOsdkMetrics-DEQFwLuz.js";import"./makeExternalStore-DKjKjidO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
