import{j as i}from"./iframe-7g13v2jN.js";import{O as p}from"./object-table-C_lh3bVp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BRe1r5Bi.js";import"./preload-helper-CclsuuMH.js";import"./Table-CNrYfnyS.js";import"./index-BgJ1FFdq.js";import"./Dialog-B8lGpi4M.js";import"./cross-OMCp2mi_.js";import"./svgIconContainer-DukTjdz5.js";import"./useBaseUiId-C7XxkQYq.js";import"./InternalBackdrop-DWiXKM0G.js";import"./composite-B2zIsJ0R.js";import"./index-f0-b4s2g.js";import"./index-DlhSwHJN.js";import"./index-SelFJin-.js";import"./useEventCallback-5D6oIoIr.js";import"./SkeletonBar-DtbFqHqp.js";import"./LoadingCell-ziqIUc6u.js";import"./ColumnConfigDialog-CbLCeqM4.js";import"./DraggableList-P95jNEJk.js";import"./search-sAV5xLcY.js";import"./Input-CaqMv5Lb.js";import"./useControlled-B23KZW1l.js";import"./Button-Apw5WzKr.js";import"./small-cross-DO2vuBir.js";import"./ActionButton-BIcuEm-R.js";import"./Checkbox-Bf-1hh15.js";import"./useValueChanged-D9FXoZkK.js";import"./CollapsiblePanel-DdzzFDVY.js";import"./MultiColumnSortDialog-B3gYDQCx.js";import"./MenuTrigger-Aj7zB13g.js";import"./CompositeItem-B-yStqfF.js";import"./ToolbarRootContext-CE2CALLi.js";import"./getDisabledMountTransitionStyles-CW70_K2g.js";import"./getPseudoElementBounds-CunRcIqO.js";import"./chevron-down-CFQZfM99.js";import"./index-BfjN1GaO.js";import"./error-D4UXhq88.js";import"./BaseCbacBanner-DuFi7CbY.js";import"./makeExternalStore-Bri8hEZ2.js";import"./Tooltip-Dnj9fxoM.js";import"./PopoverPopup-BXniSYAa.js";import"./debounce-BEFTFyoa.js";import"./useOsdkClient-UG4YR_Hh.js";import"./tick-CRrNOkiB.js";import"./DropdownField-D0tQzFI8.js";import"./isEqual-CQ1Vajmu.js";import"./withOsdkMetrics-CxyFHZKX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
