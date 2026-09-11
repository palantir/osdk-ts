import{j as i}from"./iframe-CmbQZ_H0.js";import{O as p}from"./object-table-B5qpanxf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BeEYIUjs.js";import"./preload-helper-Ecu5FnuN.js";import"./Table-CRH1JdfM.js";import"./index-QKQySa8F.js";import"./Dialog-BIlR81C_.js";import"./cross-6T8h1X1A.js";import"./svgIconContainer-CUFAWoTA.js";import"./useBaseUiId-M00ioKA7.js";import"./InternalBackdrop-CpiUjw4e.js";import"./composite-Cb2is0DJ.js";import"./index-DlNrqWid.js";import"./index-CnDEnPo5.js";import"./index-DCPZZ569.js";import"./useEventCallback-DpC9eqeR.js";import"./SkeletonBar-BXbXBzB8.js";import"./LoadingCell-u_w18lMh.js";import"./ColumnConfigDialog-CC4LTt-u.js";import"./DraggableList-BywbQPU9.js";import"./search-CVqyjRk8.js";import"./Input-B5NiOwJX.js";import"./useControlled-CF22MFs5.js";import"./Button-CDF-lBwk.js";import"./small-cross-BIkNXmJL.js";import"./ActionButton-BK-luMEu.js";import"./Checkbox-DV7yfsNm.js";import"./useValueChanged-sq-Bi9MD.js";import"./CollapsiblePanel-COC1FjJY.js";import"./MultiColumnSortDialog-CLzqvvaJ.js";import"./MenuTrigger-DoYNc0Qv.js";import"./CompositeItem-ByYHjWLD.js";import"./ToolbarRootContext-B1xhX1z_.js";import"./getDisabledMountTransitionStyles-nKH94PKf.js";import"./getPseudoElementBounds-1u2TW9bY.js";import"./chevron-down-BhlVnWsI.js";import"./index-B3o3BLIH.js";import"./error-Beqgpujq.js";import"./BaseCbacBanner-BOiuNJMc.js";import"./makeExternalStore-BB3Iwwej.js";import"./Tooltip-DwJa0Vj6.js";import"./PopoverPopup-Do5Thirt.js";import"./debounce-CqRFkPfJ.js";import"./useOsdkClient-xLtiSbvO.js";import"./tick-C2UWJ6pc.js";import"./DropdownField-B46cTE2Y.js";import"./isEqual-DV0aS7dm.js";import"./withOsdkMetrics-DoacziBi.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
