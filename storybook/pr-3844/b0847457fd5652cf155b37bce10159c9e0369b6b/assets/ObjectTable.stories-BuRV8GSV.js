import{j as i}from"./iframe-V5rE8KDw.js";import{O as p}from"./object-table-B0vhVLrL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-hATMc6Xf.js";import"./preload-helper-DknuiWi_.js";import"./Table-LeSFZzIb.js";import"./index-_FCtaiM3.js";import"./Dialog-MwV9aD72.js";import"./cross-C2n7IRZQ.js";import"./svgIconContainer-AJeYbeFM.js";import"./useBaseUiId-CH-J5SI4.js";import"./InternalBackdrop-DfHmuXky.js";import"./composite-D5YL1ztv.js";import"./index-2F7yM2i8.js";import"./index-CXP_H6_U.js";import"./index-BMRzhVlf.js";import"./useEventCallback-B8UNsOgz.js";import"./SkeletonBar-C8ZaszP9.js";import"./LoadingCell-D6o4_Xd9.js";import"./ColumnConfigDialog-D1UEGgsU.js";import"./DraggableList-C0rszgRW.js";import"./search-4cA--3cr.js";import"./Input-BHWzg8mQ.js";import"./useControlled-DSRawVMq.js";import"./isEqual-BQ7BWabA.js";import"./isObject-Cr_5mWaW.js";import"./Button-us1Dbg1o.js";import"./ActionButton-BtERxzck.js";import"./Checkbox-RO12Xd4C.js";import"./useValueChanged-WBLhf4kP.js";import"./CollapsiblePanel-BcGhh1Xs.js";import"./MultiColumnSortDialog-C1tRvzoR.js";import"./MenuTrigger-DgeuS-D5.js";import"./CompositeItem-BqWlN0Kd.js";import"./ToolbarRootContext-BPNNJjel.js";import"./getDisabledMountTransitionStyles-BjWSAVGN.js";import"./getPseudoElementBounds-CTv9E0wh.js";import"./chevron-down-C5bbVy-V.js";import"./index-BPWQliv4.js";import"./error-BkdEf2d-.js";import"./BaseCbacBanner-DaXaqP1v.js";import"./makeExternalStore-l02CrJa9.js";import"./Tooltip-BcpdDlzg.js";import"./PopoverPopup-U7-gMqVE.js";import"./toNumber-GcmD5gG2.js";import"./useOsdkClient-QxsObIPr.js";import"./tick-CBRotIc5.js";import"./DropdownField-D2DZIVM8.js";import"./withOsdkMetrics-Fp5zwAOD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
