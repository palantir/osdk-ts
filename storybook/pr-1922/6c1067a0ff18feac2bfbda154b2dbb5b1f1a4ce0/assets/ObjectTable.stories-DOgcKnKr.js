import{j as i}from"./iframe-DpUFwGwm.js";import{O as p}from"./object-table-CSsf7wx7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-X4GtRQZ5.js";import"./preload-helper-D7G3iNMY.js";import"./Table-nlH2SQUj.js";import"./index-BRNwf_dL.js";import"./Dialog-aU2zLBm5.js";import"./cross-BOdVaiDd.js";import"./svgIconContainer-DnMlbACY.js";import"./useBaseUiId-BCiTIIVN.js";import"./InternalBackdrop-CcB5ZdVo.js";import"./composite-Cj7Gyck6.js";import"./index-ySwYaDEc.js";import"./index-DauVYyRU.js";import"./index-1ybkaqeD.js";import"./useEventCallback-C_1b83KE.js";import"./SkeletonBar-B7RRaHio.js";import"./LoadingCell-B0fS22kl.js";import"./ColumnConfigDialog-DPX5_-xD.js";import"./DraggableList-C_PZjvkP.js";import"./search-BkAszfZ6.js";import"./Input-B7COcDHt.js";import"./useControlled-raZDZG7g.js";import"./Button-DfSDbPeQ.js";import"./small-cross-B-9K90Gm.js";import"./ActionButton-DopPp6r9.js";import"./Checkbox-Bz7CDvbc.js";import"./useValueChanged-BVjsLDJ4.js";import"./CollapsiblePanel-DV0xAGpE.js";import"./MultiColumnSortDialog-zSQJj82d.js";import"./MenuTrigger-DUfBpM0w.js";import"./CompositeItem-CN8uA6ij.js";import"./ToolbarRootContext-DKuVgI34.js";import"./getDisabledMountTransitionStyles-DXafZfY4.js";import"./getPseudoElementBounds-C6e9H8MY.js";import"./chevron-down-CYVMAiKh.js";import"./index-B-mDfD20.js";import"./error-B3ctmJqj.js";import"./BaseCbacBanner-Ck2b17wK.js";import"./makeExternalStore-Cx_BHKOC.js";import"./Tooltip-DYGDXGf_.js";import"./PopoverPopup-EnybrYm9.js";import"./debounce-DchhwRiM.js";import"./useOsdkClient-Dec5bd1s.js";import"./tick-B9gaIQRk.js";import"./DropdownField-DmDMqc8s.js";import"./isEqual-BLIZs3oM.js";import"./withOsdkMetrics-D7Wb3D4v.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
