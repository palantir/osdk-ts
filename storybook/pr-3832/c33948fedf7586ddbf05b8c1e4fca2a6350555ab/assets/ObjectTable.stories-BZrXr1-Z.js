import{j as i}from"./iframe-DQJhsGVr.js";import{O as p}from"./object-table-BjV_vJjr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Yi1sw1uE.js";import"./preload-helper-BYPnNrHf.js";import"./Table-BubZaiGx.js";import"./index-1_EsOKwE.js";import"./Dialog-Bb1l7Kje.js";import"./cross-RNHwHsza.js";import"./svgIconContainer-HMv0MEad.js";import"./useBaseUiId-EuR0djcZ.js";import"./InternalBackdrop-Cs0T4rJ3.js";import"./composite-DvpYcJ4q.js";import"./index-CbwbPLuB.js";import"./index-d5GOwTqG.js";import"./index-DUQBSqzq.js";import"./useEventCallback-DVzfprMv.js";import"./SkeletonBar-CT5sY0Sj.js";import"./LoadingCell-BwmFV4Ps.js";import"./ColumnConfigDialog-BS59tt78.js";import"./DraggableList-dBpIwsbr.js";import"./search-DJW6FQCH.js";import"./Input-DLTHdalW.js";import"./useControlled-CavIZvRH.js";import"./isEqual-B-xwiFzL.js";import"./isObject-DDLvUWU9.js";import"./Button-DoThKF3_.js";import"./ActionButton-Dg9OJBAE.js";import"./Checkbox-C13FyR1l.js";import"./useValueChanged-Bjtcn_OZ.js";import"./CollapsiblePanel-CTL5FTpu.js";import"./MultiColumnSortDialog-BiwLfm0u.js";import"./MenuTrigger-BSrSjDrL.js";import"./CompositeItem-BHa5W7al.js";import"./ToolbarRootContext-DPrCQgAj.js";import"./getDisabledMountTransitionStyles-BXFxCvRe.js";import"./getPseudoElementBounds-YUnfbs-Q.js";import"./chevron-down-Mkun0WwY.js";import"./index-mkeG7rQI.js";import"./error-OGxYpfA4.js";import"./BaseCbacBanner-DllNzV1_.js";import"./makeExternalStore-pYvmGBhQ.js";import"./Tooltip-ClcT_wsL.js";import"./PopoverPopup-Bq1IEmwF.js";import"./toNumber-DQYOTChI.js";import"./useOsdkClient-Dj7AzKP-.js";import"./tick-D8gY6lgy.js";import"./DropdownField-tDuqkBrj.js";import"./withOsdkMetrics-Do5HPYid.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
