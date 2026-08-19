import{j as i}from"./iframe-DYBY68Q5.js";import{O as p}from"./object-table-7jZkx5MQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DLN-v5Ch.js";import"./preload-helper-6jdikgud.js";import"./Table-BI6QQzme.js";import"./index-DYr8tZfC.js";import"./Dialog-DdQok29H.js";import"./cross-D1pY89Tf.js";import"./svgIconContainer-DVOm9YM-.js";import"./useBaseUiId-BCwirq_0.js";import"./InternalBackdrop-C83NCaF8.js";import"./composite-DPIoPlux.js";import"./index-DC69q5Jt.js";import"./index-wVZvTCZs.js";import"./index-Bg_slHsw.js";import"./useEventCallback-DoyLzMRU.js";import"./SkeletonBar-POUHWA40.js";import"./LoadingCell-CwIhxMor.js";import"./ColumnConfigDialog-BmsJ16bH.js";import"./DraggableList-BB4LGUdH.js";import"./search-BT_TSpdS.js";import"./Input-CeNaPmq7.js";import"./useControlled-DGyihqNn.js";import"./Button-Ckf62jzo.js";import"./small-cross-C0orqSu_.js";import"./ActionButton-4sbCgVC0.js";import"./Checkbox-D_HOJ0vt.js";import"./useValueChanged-BLTi5hDu.js";import"./CollapsiblePanel-BYQqT4Yv.js";import"./MultiColumnSortDialog-B55nseyW.js";import"./MenuTrigger-BMalK_zu.js";import"./CompositeItem-C1KECpIa.js";import"./ToolbarRootContext-sggHk5XS.js";import"./getDisabledMountTransitionStyles-DPEQynz2.js";import"./getPseudoElementBounds-DWvo2zhM.js";import"./chevron-down-DsJHih2n.js";import"./index-Cn62hcUq.js";import"./error-CiemvQ24.js";import"./BaseCbacBanner-DbKnsRoL.js";import"./makeExternalStore-B1pouQLK.js";import"./Tooltip-Cv5sHp_6.js";import"./PopoverPopup-B9mbop5m.js";import"./debounce-DjfstlXR.js";import"./useOsdkClient-BVZQ9HkC.js";import"./tick-LKuIFCdg.js";import"./DropdownField-BcFd03Vz.js";import"./isEqual-MKOeJWxb.js";import"./withOsdkMetrics-BwDH-iYP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
