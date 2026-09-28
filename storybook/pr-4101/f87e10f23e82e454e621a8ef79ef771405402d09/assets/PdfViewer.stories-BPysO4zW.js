import{j as r,M as s}from"./iframe-DroyfEdp.js";import{P as p}from"./pdf-viewer-Cm7rb6jy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CO5gXc9E.js";import"./preload-helper-DE-s4jHf.js";import"./PdfViewer-CqpoDNjd.js";import"./index-DKMli8iM.js";import"./BasePdfViewer-B2OXdWfV.js";import"./BasePdfViewer.module.css-IeXXzuKR.js";import"./PdfViewerAnnotationLayer-BgX9G216.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B__hofp1.js";import"./PdfViewerOutlineSidebar-CD-6V82D.js";import"./PdfViewerSidebarHeader-CM1WtqgP.js";import"./useBaseUiId-pK5yffkm.js";import"./useControlled-CyNj1h6c.js";import"./CompositeRoot-xp_W_BW5.js";import"./CompositeItem-Dn6R0SEl.js";import"./ToolbarRootContext-COAtqpEr.js";import"./composite-CNL7aYdy.js";import"./svgIconContainer-CAEQYwKx.js";import"./PdfViewerSearchBar-CxuPyr_9.js";import"./chevron-up-Du3mP--P.js";import"./chevron-down-CNLIjVlD.js";import"./cross-BriOBw5J.js";import"./PdfViewerSidebar-BzwRSYxQ.js";import"./index-DBslVvKA.js";import"./index-CnNUuV9s.js";import"./index-C74kuOpO.js";import"./PdfViewerToolbar-CVPlOmnz.js";import"./Button-DQlH9UOj.js";import"./chevron-right-n2xP7RCr.js";import"./Input-CIFY8xRI.js";import"./search-BjVtZrtO.js";import"./spin-DAc--yAY.js";import"./error-DXyNBqI3.js";import"./withOsdkMetrics-C_wBtmZt.js";import"./makeExternalStore-BCFNzFHX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
