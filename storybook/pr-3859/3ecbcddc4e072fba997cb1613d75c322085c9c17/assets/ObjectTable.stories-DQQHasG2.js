import{j as i}from"./iframe-DqNwpodn.js";import{O as p}from"./object-table-CndYUbpU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BO_FiWUr.js";import"./preload-helper-Cozt92uG.js";import"./Table-CXew3kSo.js";import"./index-CQGcEopW.js";import"./Dialog-DYBN3w-h.js";import"./cross-ZDjiMYg9.js";import"./svgIconContainer-C0i7IGlc.js";import"./useBaseUiId-D0IRY_xq.js";import"./InternalBackdrop-bq37mfFN.js";import"./composite-CSLCI2p4.js";import"./index-Bhsl5-6I.js";import"./index-Bhb5doz-.js";import"./index-Bj_LoOtk.js";import"./useEventCallback-ChBBAdDe.js";import"./SkeletonBar-CA3-8q0G.js";import"./LoadingCell-_NAbetJ9.js";import"./ColumnConfigDialog-C5283-BB.js";import"./DraggableList-7y4TwzOW.js";import"./search-iXI7_iDk.js";import"./Input-dxlaYnFR.js";import"./useControlled-5kZb40iP.js";import"./isEqual-DLP-WK2H.js";import"./isObject-BRUxE1BI.js";import"./Button-yW5WqrcK.js";import"./ActionButton-DZE22GuX.js";import"./Checkbox-BaCUu8TS.js";import"./useValueChanged-DH14YV6T.js";import"./CollapsiblePanel-1B--EGV-.js";import"./MultiColumnSortDialog-BK4Wy9qy.js";import"./MenuTrigger-DSRQj8Ru.js";import"./CompositeItem-DRCpZxZT.js";import"./ToolbarRootContext-DNu-sflf.js";import"./getDisabledMountTransitionStyles-VX6CDH_F.js";import"./getPseudoElementBounds-t8ALxim5.js";import"./chevron-down-CkHwZ2js.js";import"./index-Bd8jGuQf.js";import"./error-QvLeIger.js";import"./BaseCbacBanner-vtKG92ma.js";import"./makeExternalStore-Bbu0t-Pj.js";import"./Tooltip-BMr5xNxI.js";import"./PopoverPopup-XHTPxMzD.js";import"./toNumber-BQcG8fNf.js";import"./useOsdkClient-DJJkzB6p.js";import"./tick-DP_4Q22L.js";import"./DropdownField-GXJNahHs.js";import"./withOsdkMetrics-DueETg7y.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
