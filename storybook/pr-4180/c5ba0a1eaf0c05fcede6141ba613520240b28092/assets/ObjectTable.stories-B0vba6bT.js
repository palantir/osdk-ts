import{j as i}from"./iframe-B0BeHSW3.js";import{O as p}from"./object-table-DdTuxNNY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DSxH7R34.js";import"./preload-helper-DAJqEBqZ.js";import"./Table-kE_BvdsI.js";import"./index-fkdnmgoB.js";import"./Dialog-B5C9WyLD.js";import"./cross-ChIXxlFh.js";import"./svgIconContainer-3LirYjxc.js";import"./useBaseUiId-CFx2OXwB.js";import"./InternalBackdrop-xPEFo0aI.js";import"./composite-BKG8TgZ7.js";import"./index-CeseuNBk.js";import"./index-B8qFFoze.js";import"./index-ChyoeDYU.js";import"./useEventCallback-B0c3gcjQ.js";import"./SkeletonBar-C5AffQmv.js";import"./LoadingCell-VUqHb4DV.js";import"./ColumnConfigDialog-CfkbMa1G.js";import"./DraggableList-DnLwSB2K.js";import"./search-Eov1ZRug.js";import"./Input-BhPQq-YU.js";import"./useControlled-Y2VvyFT1.js";import"./Button-CUzfzg16.js";import"./small-cross-GcZN--Q5.js";import"./ActionButton-DWP5wTUe.js";import"./Checkbox-CVXwVKB9.js";import"./useValueChanged-IjvfJjRR.js";import"./CollapsiblePanel-chL21z8S.js";import"./MultiColumnSortDialog-C7qO2RVW.js";import"./MenuTrigger-CJ8xEsSL.js";import"./CompositeItem-CCwjGTNJ.js";import"./ToolbarRootContext-BU8BYZpt.js";import"./getDisabledMountTransitionStyles--mZk6BZS.js";import"./getPseudoElementBounds-B-DwAZaN.js";import"./chevron-down-CIEyD1Re.js";import"./index-Dbl4MtyX.js";import"./error-LXXuPtJW.js";import"./BaseCbacBanner-DgmS4GYo.js";import"./makeExternalStore-CLIh_9sw.js";import"./Tooltip-DNEHwr8p.js";import"./PopoverPopup-DAPZVEwH.js";import"./debounce-DeBplguO.js";import"./useOsdkClient-CYqnm12a.js";import"./tick-cnkBzsXZ.js";import"./DropdownField-BHYbQQp4.js";import"./isEqual-BmLwudnH.js";import"./withOsdkMetrics-CRG9AD3M.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
