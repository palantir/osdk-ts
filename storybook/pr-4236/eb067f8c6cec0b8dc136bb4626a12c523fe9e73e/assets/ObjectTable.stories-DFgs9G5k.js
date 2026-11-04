import{j as i}from"./iframe-BGoY5mFC.js";import{O as p}from"./object-table-DfeUx1e5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BKnKWigg.js";import"./preload-helper-DsvzwfCi.js";import"./Table-IYycR_yA.js";import"./index-DnfiKoHw.js";import"./Dialog-B4v_Dkac.js";import"./cross-BtqJOxEL.js";import"./svgIconContainer-BX-wZNF4.js";import"./useBaseUiId-CIYnZ7Oo.js";import"./InternalBackdrop-Cuwv9baZ.js";import"./composite-DKhm2DCj.js";import"./index-B6V6F-VV.js";import"./index-DYEd7rlA.js";import"./index-BdsorHI7.js";import"./useEventCallback-B7XLSD-1.js";import"./SkeletonBar-BJdY69_4.js";import"./LoadingCell-BhvmkPi_.js";import"./ColumnConfigDialog-Bo_2MhnH.js";import"./DraggableList-YOfpeBYu.js";import"./search-Du0qzm2Q.js";import"./Input-D9S9buqu.js";import"./useControlled-Cqb7ClaQ.js";import"./Button-CFNLbf5u.js";import"./small-cross-CAVitq02.js";import"./ActionButton-BYefn9m4.js";import"./Checkbox-gUrxRc_L.js";import"./useValueChanged-U8j9sHFt.js";import"./CollapsiblePanel-_2hoyG7n.js";import"./MultiColumnSortDialog-Ch8pRqdH.js";import"./MenuTrigger-Ds2ksrWo.js";import"./CompositeItem-2fAyt8Be.js";import"./ToolbarRootContext-DUxALj_T.js";import"./getDisabledMountTransitionStyles-C7fH5JXd.js";import"./getPseudoElementBounds-ALTzwxqv.js";import"./chevron-down-CCx6Nv0U.js";import"./index-B0vfjDqX.js";import"./error-Brajw6PY.js";import"./BaseCbacBanner-DY-2ccuc.js";import"./makeExternalStore-BltVU3hB.js";import"./Tooltip-CaSp1gFC.js";import"./PopoverPopup-SiLT4RMM.js";import"./debounce-COVFQzqA.js";import"./useOsdkClient-9nkt6SOH.js";import"./tick-DIaShr09.js";import"./DropdownField-nznVdv8m.js";import"./isEqual-BpvRW_ez.js";import"./withOsdkMetrics-DBjKwuY0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
