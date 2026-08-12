import{j as i}from"./iframe-BH5IiT7r.js";import{O as p}from"./object-table-BW6RTOXg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ByvRmvlT.js";import"./preload-helper-CgcnXVY5.js";import"./Table-D_W9urGu.js";import"./index-C-xq5Jew.js";import"./Dialog-C6OztUa_.js";import"./cross-ffgBmB0d.js";import"./svgIconContainer-GOdrTkUX.js";import"./useBaseUiId-BT9W5-EQ.js";import"./InternalBackdrop-CW3CGDGx.js";import"./composite-zGPWEU1s.js";import"./index-CgtSgOie.js";import"./index-17g8derX.js";import"./index-gEdevmN0.js";import"./useEventCallback-CVRpqdys.js";import"./SkeletonBar-C-uw19Eo.js";import"./LoadingCell-D2amFioP.js";import"./ColumnConfigDialog-BHvw7gNa.js";import"./DraggableList-MtpUaxAL.js";import"./search-BDtWZjZ5.js";import"./Input-BFWuvbJ_.js";import"./useControlled-CWW3ek2h.js";import"./isEqual-BC2M-2CX.js";import"./isObject-CMbI-zc1.js";import"./Button-BFL5vhLR.js";import"./ActionButton-BeBI1zwZ.js";import"./Checkbox-DWu4oxw1.js";import"./useValueChanged-BIJBxhOX.js";import"./CollapsiblePanel-CE6t4zMY.js";import"./MultiColumnSortDialog-Dq1D8klA.js";import"./MenuTrigger-DJczZRaO.js";import"./CompositeItem-DLW8zfDE.js";import"./ToolbarRootContext-BVDM8PzK.js";import"./getDisabledMountTransitionStyles-D_kMbb23.js";import"./getPseudoElementBounds-Cu4Nj1AV.js";import"./chevron-down-DlwuI3Cv.js";import"./index-D0K_ANpa.js";import"./error-BQnTtdHZ.js";import"./BaseCbacBanner-BLenB8LF.js";import"./makeExternalStore-Bf5Duafr.js";import"./Tooltip-BLCkRQ77.js";import"./PopoverPopup-BPSLn2US.js";import"./toNumber-CFbWl-Bc.js";import"./useOsdkClient-DuTHbZmX.js";import"./tick-CgIBwy3v.js";import"./DropdownField-X9oL0fth.js";import"./withOsdkMetrics-DGdq_Xe-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
