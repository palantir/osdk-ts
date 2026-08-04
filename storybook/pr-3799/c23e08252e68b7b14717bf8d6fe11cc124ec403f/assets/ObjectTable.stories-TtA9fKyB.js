import{j as i}from"./iframe-B5HqSCrD.js";import{O as p}from"./object-table-CLhvV0sn.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BJrNemX-.js";import"./preload-helper-DE0BuRVC.js";import"./Table-DkELPzBJ.js";import"./index-3d_Ih8uu.js";import"./Dialog-H9-E4w2l.js";import"./cross-VDxjcvXQ.js";import"./svgIconContainer-CO9jRBk2.js";import"./useBaseUiId-CeyHJ71C.js";import"./InternalBackdrop-DBiFfm9_.js";import"./composite-BZoJUTZ6.js";import"./index-Dmjh6VFf.js";import"./index-DYzYrR48.js";import"./index-99B3A1s9.js";import"./useEventCallback-C8_kB9P9.js";import"./SkeletonBar-BLsKHVil.js";import"./LoadingCell-BEvGs8YD.js";import"./ColumnConfigDialog-DH75OxG6.js";import"./DraggableList-CxDpBb9E.js";import"./search-CuXh0Rqq.js";import"./Input-B9x2qENv.js";import"./useControlled-BmEUk3EV.js";import"./isEqual-Xf2Ok89z.js";import"./isObject-D3meP0-w.js";import"./Button-iUWC51LE.js";import"./ActionButton-DFf9rTic.js";import"./Checkbox-CHxjevHU.js";import"./useValueChanged-1wblBHwY.js";import"./CollapsiblePanel-BBfKXcAF.js";import"./MultiColumnSortDialog-CFCdo4Nh.js";import"./MenuTrigger-C9hbuv7A.js";import"./CompositeItem-B8KMobiC.js";import"./ToolbarRootContext-CDgHazHY.js";import"./getDisabledMountTransitionStyles-hHW3P6En.js";import"./getPseudoElementBounds-BHzfj_4b.js";import"./chevron-down-n8kYFotX.js";import"./index-DQiInoFX.js";import"./error-CIQ5NIBk.js";import"./BaseCbacBanner-BF2X8on1.js";import"./makeExternalStore-DH9SaGtV.js";import"./Tooltip-DvI37wGo.js";import"./PopoverPopup-BW2-1mOh.js";import"./toNumber-BnUSw4ET.js";import"./useOsdkClient-Y2Pbzv4c.js";import"./tick-Z31rtQQN.js";import"./DropdownField-dRPK3w48.js";import"./withOsdkMetrics-GMU0XdN8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
