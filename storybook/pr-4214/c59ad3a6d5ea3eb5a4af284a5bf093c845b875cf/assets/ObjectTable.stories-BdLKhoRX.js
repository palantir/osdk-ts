import{j as i}from"./iframe-DzqriYoa.js";import{O as p}from"./object-table-D5UwWSXl.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-VXjosqmL.js";import"./preload-helper-rEyizNUS.js";import"./Table-DyuUSwsE.js";import"./index-CbCX59S_.js";import"./Dialog-D1TTSOys.js";import"./cross-BYH-2i8n.js";import"./svgIconContainer-DGWH6ifX.js";import"./useBaseUiId-Dl4SGLhQ.js";import"./InternalBackdrop-CV9wiOw_.js";import"./composite-C_fUKfgf.js";import"./index-DbWpjH26.js";import"./index-D2hymCML.js";import"./index-BeXGlMwj.js";import"./useEventCallback--hGnFhfC.js";import"./SkeletonBar-l_DEAtNb.js";import"./LoadingCell-1xT5cYBz.js";import"./ColumnConfigDialog-CxRjf-Qz.js";import"./DraggableList-XCyCGDiX.js";import"./search-CdGNOopx.js";import"./Input-BkQ3tb2C.js";import"./useControlled-Y5VNoFPF.js";import"./Button-CORzZHVQ.js";import"./small-cross-Ctj0EcuU.js";import"./ActionButton-wBjk7qIy.js";import"./Checkbox-JHBqeoQa.js";import"./useValueChanged-Bbm6hoIu.js";import"./CollapsiblePanel-j9A_r2A6.js";import"./MultiColumnSortDialog-B0NKFRrJ.js";import"./MenuTrigger-C0zHrdEW.js";import"./CompositeItem-jOjnmS3J.js";import"./ToolbarRootContext-T8dcHRUE.js";import"./getDisabledMountTransitionStyles-WG_KSQgl.js";import"./getPseudoElementBounds-Bp5H42sl.js";import"./chevron-down-Oou_YMqa.js";import"./index-DfPgZdRM.js";import"./error-Ofk1hxBS.js";import"./BaseCbacBanner-BUCQhSiR.js";import"./makeExternalStore-C6hRU-73.js";import"./Tooltip-CpxT0FiY.js";import"./PopoverPopup-C_dYk9mI.js";import"./debounce-C4Oh_cfK.js";import"./useOsdkClient-BdwocmMk.js";import"./tick-B24kLRH2.js";import"./DropdownField-BJzekVR1.js";import"./isEqual-C3BNLNeA.js";import"./withOsdkMetrics-B8iePud0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
