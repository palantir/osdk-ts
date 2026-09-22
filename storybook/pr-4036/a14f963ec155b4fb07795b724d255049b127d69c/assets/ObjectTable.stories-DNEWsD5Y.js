import{j as i}from"./iframe-X-VSGX-m.js";import{O as p}from"./object-table-B2d0hZTW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DyRk3hmo.js";import"./preload-helper-BSxm0T4I.js";import"./Table-CNIiGJ4k.js";import"./index-CGDH48tf.js";import"./Dialog-tDFf3QqW.js";import"./cross-CrghqoWd.js";import"./svgIconContainer-BdGqJkEg.js";import"./useBaseUiId-BBsjPzS0.js";import"./InternalBackdrop-CcwzaUSK.js";import"./composite-BZ7oE03c.js";import"./index-DSvAdAem.js";import"./index-C6OnhXV1.js";import"./index-CsJagvQr.js";import"./useEventCallback-BQT_oghC.js";import"./SkeletonBar-BmODE2fF.js";import"./LoadingCell-cVz6RH1p.js";import"./ColumnConfigDialog-D0NNCoU5.js";import"./DraggableList-DF-Zow-U.js";import"./search-CzcR_jWd.js";import"./Input-CjGosPl8.js";import"./useControlled-CS7Ud3A1.js";import"./Button-BvYXLNva.js";import"./small-cross-uFhshZcJ.js";import"./ActionButton-6IO1Kg5J.js";import"./Checkbox-eVoBaSOe.js";import"./useValueChanged-D6DhfqaH.js";import"./CollapsiblePanel-Bg9eBIxx.js";import"./MultiColumnSortDialog-BASSaWaa.js";import"./MenuTrigger-bMq7gUJg.js";import"./CompositeItem-Dt-41Y4b.js";import"./ToolbarRootContext-CAbB3DSY.js";import"./getDisabledMountTransitionStyles-C88V7r9e.js";import"./getPseudoElementBounds-BMlsPGB0.js";import"./chevron-down-Z8wpnP0p.js";import"./index-Daq_EkrJ.js";import"./error-D6m_rkvI.js";import"./BaseCbacBanner-CByeRFhZ.js";import"./makeExternalStore-CDBEj4Yx.js";import"./Tooltip-DQt_Cnav.js";import"./PopoverPopup-CiCOaPLV.js";import"./debounce-Bzn4rKQW.js";import"./useOsdkClient-BeU_8fLS.js";import"./tick-BYWClfY9.js";import"./DropdownField-C4WdNJVH.js";import"./isEqual-Z7jCKQSG.js";import"./withOsdkMetrics-hcsSE1Yl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
