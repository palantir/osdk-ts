import{j as i}from"./iframe-BPW75i9n.js";import{O as p}from"./object-table-B0ScVXu7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-8WFrmNXl.js";import"./preload-helper-a9fOHNzQ.js";import"./Table-DfjLiupT.js";import"./index-CvyyfkHF.js";import"./Dialog-mut58aOg.js";import"./cross-pajyLa9G.js";import"./svgIconContainer-Dn5PDua5.js";import"./useBaseUiId-BskbZTX7.js";import"./InternalBackdrop-DkH7cpcS.js";import"./composite-DOgbsbPD.js";import"./index-CZgk2iR4.js";import"./index-CpaVcYAE.js";import"./index-DaSb3oWd.js";import"./useEventCallback-DY5lK-td.js";import"./SkeletonBar-DDJ2BNxZ.js";import"./LoadingCell-Cv8pkMeY.js";import"./ColumnConfigDialog-BULFEt8z.js";import"./DraggableList-DMbfFhQZ.js";import"./search-CE2Gzn1t.js";import"./Input-BS3fT59v.js";import"./useControlled-DpyeG9JO.js";import"./Button-BtJ38CWb.js";import"./small-cross-CU1xwLoD.js";import"./ActionButton-DDSIjAJm.js";import"./Checkbox-BmUiXmJW.js";import"./useValueChanged-Cn93vlbX.js";import"./CollapsiblePanel-BNZ-hzTi.js";import"./MultiColumnSortDialog-D9vkQpxm.js";import"./MenuTrigger-n4-uf8sJ.js";import"./CompositeItem-CF5_8-vA.js";import"./ToolbarRootContext-DTxcajEt.js";import"./getDisabledMountTransitionStyles-78X03ELi.js";import"./getPseudoElementBounds-DTCBrtzp.js";import"./chevron-down-BSmURfPK.js";import"./index-DXJbf77F.js";import"./error-BRhZWJA2.js";import"./BaseCbacBanner-y1T2wwQ7.js";import"./makeExternalStore-DcLh29q-.js";import"./Tooltip-CvhMlFuZ.js";import"./PopoverPopup-DY0LcGcs.js";import"./debounce-DaEjldS8.js";import"./useOsdkClient-B9pJ8mJX.js";import"./tick-B92vo0mZ.js";import"./DropdownField-Doe0OcpJ.js";import"./isEqual-CaE8yrSi.js";import"./withOsdkMetrics-CPmfqFkZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
