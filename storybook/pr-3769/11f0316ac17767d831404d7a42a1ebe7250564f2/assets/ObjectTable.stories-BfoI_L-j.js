import{j as i}from"./iframe-BK0RufGl.js";import{O as p}from"./object-table-t3beq0jM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B15k4T0g.js";import"./preload-helper-B1x3XWjh.js";import"./Table-b9fWb8-J.js";import"./index-BC49ZXOf.js";import"./Dialog-CbB9yRpZ.js";import"./cross-fqPA6CW1.js";import"./svgIconContainer-BlFMB5mu.js";import"./useBaseUiId-frLuJhJZ.js";import"./InternalBackdrop-CCU68TOf.js";import"./composite-DlFm6szC.js";import"./index-zkQRtd-f.js";import"./index-DkQ29aQ-.js";import"./index-BGA0Seny.js";import"./useEventCallback-D-WAZtwW.js";import"./SkeletonBar-B3ZfYzgc.js";import"./LoadingCell-CHCWipwZ.js";import"./ColumnConfigDialog-COKkJ2pr.js";import"./DraggableList-CygnTHuy.js";import"./search-DuhXtbsI.js";import"./Input-BEeAXmcy.js";import"./useControlled-unttFX2J.js";import"./Button-DvmwcYmH.js";import"./small-cross-LgLYRP96.js";import"./ActionButton-balBVwMY.js";import"./Checkbox-DTs0zrQe.js";import"./useValueChanged-CepPqKH_.js";import"./CollapsiblePanel-LAagTPh8.js";import"./MultiColumnSortDialog-CC4yow6c.js";import"./MenuTrigger-ByOTJWGh.js";import"./CompositeItem-BbIk1WEG.js";import"./ToolbarRootContext-qtgBfN3j.js";import"./getDisabledMountTransitionStyles-B5ZQPzmi.js";import"./getPseudoElementBounds-CUox1hQw.js";import"./chevron-down-RflKAGzX.js";import"./index-CHiFjEhv.js";import"./error-0TFzhvIK.js";import"./BaseCbacBanner-BLULDpAD.js";import"./makeExternalStore-h_6mTVKe.js";import"./Tooltip-i56DZZjj.js";import"./PopoverPopup-Dmd4Fc1j.js";import"./debounce-Ay-ce3CA.js";import"./useOsdkClient-Bp4Do1pN.js";import"./tick-H75vELII.js";import"./DropdownField-XRnSzaZr.js";import"./isEqual-xJAxAgWV.js";import"./withOsdkMetrics-CflMk9Ld.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
