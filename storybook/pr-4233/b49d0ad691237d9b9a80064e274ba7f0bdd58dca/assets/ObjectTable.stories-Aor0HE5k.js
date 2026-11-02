import{j as i}from"./iframe-Yi2ClGEq.js";import{O as p}from"./object-table-CaIo3T7V.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BFrGcaXv.js";import"./preload-helper-Bw9P2RvH.js";import"./Table-BdFrvihc.js";import"./index-kCKGZ11f.js";import"./Dialog-C9gO9GIU.js";import"./cross-DHxNtUiL.js";import"./svgIconContainer-DLtA5jnz.js";import"./useBaseUiId-BJvR5yfv.js";import"./InternalBackdrop-D86_8K-4.js";import"./composite-7FUpzlUO.js";import"./index-C3Jd9_Nf.js";import"./index-DxUEYHeM.js";import"./index-BWR70Qv0.js";import"./useEventCallback-C9LtGhrj.js";import"./SkeletonBar-CDwfwm__.js";import"./LoadingCell-CROJ_4TS.js";import"./ColumnConfigDialog-Dy_CqDUs.js";import"./DraggableList-DaGXgq_V.js";import"./search-D88J6TuI.js";import"./Input-B_VCwPTa.js";import"./useControlled-688Acsw-.js";import"./Button-BhYwxPlJ.js";import"./small-cross-BME_eUbX.js";import"./ActionButton-Cu3YO4Fd.js";import"./Checkbox-y1-FMYyx.js";import"./useValueChanged-DMCuXC2X.js";import"./CollapsiblePanel-pAq3TuKo.js";import"./MultiColumnSortDialog-DwKTr3Yn.js";import"./MenuTrigger-DuKpFfjw.js";import"./CompositeItem-DwrEPXux.js";import"./ToolbarRootContext-erRSrQJW.js";import"./getDisabledMountTransitionStyles-B8Q9sBzy.js";import"./getPseudoElementBounds-Dsc1LKXz.js";import"./chevron-down-A6HBtaN4.js";import"./index-Ccuhm711.js";import"./error-CvXgqfjV.js";import"./BaseCbacBanner-i-5de_6b.js";import"./makeExternalStore-BnsF0xX3.js";import"./Tooltip-RTNvhfg1.js";import"./PopoverPopup-C3dzCr8l.js";import"./debounce-gfIDaUjK.js";import"./useOsdkClient-tf1w8g-M.js";import"./tick-Di576YmF.js";import"./DropdownField-BGRkIBYk.js";import"./isEqual-8BsEnXjv.js";import"./withOsdkMetrics-Dhx42yDK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
