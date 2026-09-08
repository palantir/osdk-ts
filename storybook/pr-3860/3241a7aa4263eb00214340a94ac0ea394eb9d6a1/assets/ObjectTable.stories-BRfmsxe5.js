import{j as i}from"./iframe-gHIh_ABY.js";import{O as p}from"./object-table-Dl3UN5Rz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-OaK0yVVT.js";import"./preload-helper-C--wqxNR.js";import"./Table-BPmSdLdc.js";import"./index-DyPMxe-T.js";import"./Dialog-Cc9URUc5.js";import"./cross-DecwR9UF.js";import"./svgIconContainer-BsQinfdF.js";import"./useBaseUiId-dqf5kUOq.js";import"./InternalBackdrop-DOc9dm1o.js";import"./composite-G9H6ILMG.js";import"./index-CWxda7K-.js";import"./index-D1LhnjWM.js";import"./index-C34ZHf-K.js";import"./useEventCallback-E1OVmXif.js";import"./SkeletonBar-BEzmBAg7.js";import"./LoadingCell-FOpHRjq2.js";import"./ColumnConfigDialog-CAGkaqGn.js";import"./DraggableList-CJfNVRmO.js";import"./search-Blg9RF01.js";import"./Input-CphmVuHr.js";import"./useControlled-C8OoR1Ph.js";import"./Button-bbhva_Wr.js";import"./small-cross-BwADiSMm.js";import"./ActionButton-sMHQZDfc.js";import"./Checkbox-Db14FcSZ.js";import"./useValueChanged-BBNrWnU1.js";import"./CollapsiblePanel-DgUiEhUm.js";import"./MultiColumnSortDialog-CiO9gB7G.js";import"./MenuTrigger-BMEpoHEX.js";import"./CompositeItem-ChBkH7yO.js";import"./ToolbarRootContext-BaCzfuCb.js";import"./getDisabledMountTransitionStyles-BBrgI6Lb.js";import"./getPseudoElementBounds-AK_MaNof.js";import"./chevron-down-C9sYZ9oi.js";import"./index-DPBLKrFq.js";import"./error-Bs-UYVj5.js";import"./BaseCbacBanner-B-M0WJ6I.js";import"./makeExternalStore-DdIdXh98.js";import"./Tooltip-BVVrGeU9.js";import"./PopoverPopup-BMZcpAvB.js";import"./debounce-BCvtfNN5.js";import"./useOsdkClient-BkL_6XFG.js";import"./tick-BRMzqiwr.js";import"./DropdownField-DoF6Yrgi.js";import"./isEqual-B5qnIJjO.js";import"./withOsdkMetrics-DoSr47Bs.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
