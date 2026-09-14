import{j as i}from"./iframe-B5oWllHx.js";import{O as p}from"./object-table-B05mEt7M.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-WcRBI9hw.js";import"./preload-helper-AL0pxeKM.js";import"./Table-Bu8O3QIa.js";import"./index-E8TGJhq9.js";import"./Dialog-BOG2Z9MM.js";import"./cross-D0UFXm2L.js";import"./svgIconContainer-DmiPRoPR.js";import"./useBaseUiId-B80HrYnI.js";import"./InternalBackdrop-DKUVP1zM.js";import"./composite-CxNKGIFj.js";import"./index-DpBh8txy.js";import"./index-1oTvxXM7.js";import"./index-jVYij_3i.js";import"./useEventCallback-DSNFNTa2.js";import"./SkeletonBar-BNUNe2WU.js";import"./LoadingCell-BEklDdAr.js";import"./ColumnConfigDialog-Qb7pdXIY.js";import"./DraggableList-mKUTAiS3.js";import"./search-CweXIS3_.js";import"./Input-CHGFhXTJ.js";import"./useControlled-C1shr7sK.js";import"./Button-DESnIp7_.js";import"./small-cross-BVwuTZcs.js";import"./ActionButton-CdO9nLoY.js";import"./Checkbox-zZ0CLjot.js";import"./useValueChanged-DRZa34Nq.js";import"./CollapsiblePanel-CZdxwGFg.js";import"./MultiColumnSortDialog-Bq1IcXrp.js";import"./MenuTrigger-BWSxRSdS.js";import"./CompositeItem-CBT7H_tD.js";import"./ToolbarRootContext-CY1iwJN5.js";import"./getDisabledMountTransitionStyles-v16MeVM9.js";import"./getPseudoElementBounds-CYSv1bOf.js";import"./chevron-down-843gHNxT.js";import"./index-DKR3YkoY.js";import"./error-FAfGOJk1.js";import"./BaseCbacBanner-D2yf72Cs.js";import"./makeExternalStore-4UJfUQkh.js";import"./Tooltip-DRnqt9Qa.js";import"./PopoverPopup-DZrQF8FG.js";import"./debounce-D3faGUE7.js";import"./useOsdkClient-BfV2im4Z.js";import"./tick-B3M0MzLY.js";import"./DropdownField-emaGDLLt.js";import"./isEqual-BV--_VPI.js";import"./withOsdkMetrics-Ct5oqpuP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
