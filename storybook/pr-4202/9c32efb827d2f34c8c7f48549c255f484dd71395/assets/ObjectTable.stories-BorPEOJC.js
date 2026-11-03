import{j as i}from"./iframe-CRdsH5HZ.js";import{O as p}from"./object-table-CUFv6UI4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BjB8uLkT.js";import"./preload-helper-CKZQslH7.js";import"./Table-DkkO-DrZ.js";import"./index-DTd5KXcK.js";import"./Dialog-CmlPK-gk.js";import"./cross-Ck_cirtk.js";import"./svgIconContainer-B82w1dNX.js";import"./useBaseUiId-CclOULO6.js";import"./InternalBackdrop-DJrTMBsF.js";import"./composite-83cwJd-q.js";import"./index-Cn4z51Ds.js";import"./index-CF0tZzS5.js";import"./index-DvUsnOXq.js";import"./useEventCallback-C0Ta6sLF.js";import"./SkeletonBar-DYF5X8SW.js";import"./LoadingCell-BN4n4qs-.js";import"./ColumnConfigDialog-C_h_kxKO.js";import"./DraggableList-BW5fwLS7.js";import"./search-BLamqbky.js";import"./Input-C5MZZ2uA.js";import"./useControlled-DWxXLpHB.js";import"./Button-DC0lWoOP.js";import"./small-cross-BreRJzoU.js";import"./ActionButton-D-BsxzSk.js";import"./Checkbox-CfBjCkTk.js";import"./useValueChanged-CX0FVdOs.js";import"./CollapsiblePanel-0dVMjFgS.js";import"./MultiColumnSortDialog-BmRwnaRM.js";import"./MenuTrigger-Bn3KvjTK.js";import"./CompositeItem-2Hw_8anp.js";import"./ToolbarRootContext-CqwjH-y3.js";import"./getDisabledMountTransitionStyles-C6LNjQ6D.js";import"./getPseudoElementBounds-CvnVVkY1.js";import"./chevron-down-0O9k5DT8.js";import"./index-IbJqJxEo.js";import"./error-Cy0mbDhX.js";import"./BaseCbacBanner-Dcb8iXmf.js";import"./makeExternalStore-DkeRNmA2.js";import"./Tooltip-BJFUBzvs.js";import"./PopoverPopup-B-cadNgq.js";import"./debounce-t2Bd0wd0.js";import"./useOsdkClient-DpUzM88Y.js";import"./tick-vhMtzz2I.js";import"./DropdownField-DNlPXkBE.js";import"./isEqual-BpGRYfyV.js";import"./withOsdkMetrics-CI0orLhd.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
