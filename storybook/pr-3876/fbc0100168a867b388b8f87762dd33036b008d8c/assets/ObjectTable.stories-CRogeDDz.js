import{j as i}from"./iframe-CRVmTQY5.js";import{O as p}from"./object-table-C-CPNALr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-gixSqALb.js";import"./preload-helper-COtteTaQ.js";import"./Table-DOs4kb3e.js";import"./index-Dw_-9fsS.js";import"./Dialog-AGuJ7asO.js";import"./cross-BTxRvC3_.js";import"./svgIconContainer-dBFN_To1.js";import"./useBaseUiId-D67cR8AP.js";import"./InternalBackdrop-CFo60NBG.js";import"./composite-BzmHlTbJ.js";import"./index-CQe3SKlh.js";import"./index-ASaPE2Ya.js";import"./index-BCE70X_-.js";import"./useEventCallback-DCb6bcgR.js";import"./SkeletonBar-BtVEI4Pu.js";import"./LoadingCell-be2SCVst.js";import"./ColumnConfigDialog-DiilIE8B.js";import"./DraggableList-fDNclTmJ.js";import"./search-DNHDuEbV.js";import"./Input-H1MlkSJg.js";import"./useControlled-BqiQYi-d.js";import"./Button-W6OP53wY.js";import"./small-cross-CHuR5Heg.js";import"./ActionButton-yYXJfxZv.js";import"./Checkbox-D7Fc3wdH.js";import"./useValueChanged-CvCQSXar.js";import"./CollapsiblePanel-BaG84gug.js";import"./MultiColumnSortDialog-CSyVQdsn.js";import"./MenuTrigger-C-FcvPeh.js";import"./CompositeItem-U_R9UZKK.js";import"./ToolbarRootContext-DwYXvC-Y.js";import"./getDisabledMountTransitionStyles-Bvrk1gjH.js";import"./getPseudoElementBounds-BT0xqbyg.js";import"./chevron-down-CNBvsY8h.js";import"./index-DlWFsW2l.js";import"./error-BhsW8xEv.js";import"./BaseCbacBanner-QzBezdS9.js";import"./makeExternalStore-CzFcgJvi.js";import"./Tooltip-C68sT4dG.js";import"./PopoverPopup-FpD1DxdK.js";import"./debounce-ypv0Ae7P.js";import"./useOsdkClient-ClCBM1r0.js";import"./tick-DIcVjwb8.js";import"./DropdownField-DyiAO7Yl.js";import"./isEqual-oWzSeSqP.js";import"./withOsdkMetrics-0XIdQxec.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
