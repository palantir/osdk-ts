import{j as r,M as s}from"./iframe-D1LXFBxc.js";import{P as p}from"./pdf-viewer-_oBz9KRq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C8lTfokb.js";import"./preload-helper-BMGLbfqy.js";import"./PdfViewer-B9v7Y5YS.js";import"./index-1OI0nGkQ.js";import"./BasePdfViewer-Cx9xFV6z.js";import"./BasePdfViewer.module.css-CT5zd1E2.js";import"./PdfViewerAnnotationLayer-BWYxxa_r.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DucLrrp1.js";import"./PdfViewerOutlineSidebar-DL_4sJ0y.js";import"./PdfViewerSidebarHeader-B0awVJCF.js";import"./useBaseUiId-ps7HY4-v.js";import"./useControlled-BkSZr9vP.js";import"./CompositeRoot-987Pw8HT.js";import"./CompositeItem-TBc75DhR.js";import"./ToolbarRootContext-BWtsBung.js";import"./composite-DuREibPe.js";import"./svgIconContainer-bswbKgoA.js";import"./PdfViewerSearchBar-lwzKAd6C.js";import"./chevron-up-B0BFRWG2.js";import"./chevron-down-BcP7YmhL.js";import"./cross-fpuOrCid.js";import"./PdfViewerSidebar-CBQnAHk7.js";import"./index-BilF2CpV.js";import"./index-BkZOFAl2.js";import"./index-DHKG1l8R.js";import"./PdfViewerToolbar-Do6w6iDk.js";import"./Button-DQBtx8tI.js";import"./chevron-right-ypcfqbWS.js";import"./Input-Dcr7sH0u.js";import"./search-DbOA3UnO.js";import"./spin-CUE-u5-u.js";import"./error-CxJnkhM-.js";import"./withOsdkMetrics-BQyS4Ebn.js";import"./makeExternalStore-BkL46d6x.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
