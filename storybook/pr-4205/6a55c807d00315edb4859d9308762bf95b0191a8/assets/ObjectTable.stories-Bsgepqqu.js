import{j as i}from"./iframe-5xumy2lC.js";import{O as p}from"./object-table-BoICPgng.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bd4MRcdu.js";import"./preload-helper-Dnp5J3ho.js";import"./Table-B-ZJ6RyM.js";import"./index-OGeocGA5.js";import"./Dialog-2O1iW9tl.js";import"./cross-Bww8SGey.js";import"./svgIconContainer-DKJstnRa.js";import"./useBaseUiId-CR8wF2TF.js";import"./InternalBackdrop-C2jSgbPR.js";import"./composite-Dn6Zzxac.js";import"./index-B83pdUrW.js";import"./index-11qWnEer.js";import"./index-HxIZUXDP.js";import"./useEventCallback-CxEaj7x3.js";import"./SkeletonBar-DBfsc1dV.js";import"./LoadingCell-BFn-JqZ5.js";import"./ColumnConfigDialog-C52LWu4a.js";import"./DraggableList-BnpaVKas.js";import"./search-CRyjUtCH.js";import"./Input-Cpl3LxFn.js";import"./useControlled-DMTvVf4P.js";import"./Button-DIwfO1Nk.js";import"./small-cross-CsEkOEx1.js";import"./ActionButton-DZ1xi4Ao.js";import"./Checkbox--1EfxJcT.js";import"./useValueChanged-CQXaTK7m.js";import"./CollapsiblePanel-B1WD2ZBX.js";import"./MultiColumnSortDialog-JTsYSu8n.js";import"./MenuTrigger-CSz-O7Ps.js";import"./CompositeItem-FF3KNmJW.js";import"./ToolbarRootContext-D1AghJYR.js";import"./getDisabledMountTransitionStyles-SCV6Vods.js";import"./getPseudoElementBounds-CPzGORpb.js";import"./chevron-down-De5_JPFZ.js";import"./index-BqDaJCNF.js";import"./error-Dp5nV5lf.js";import"./BaseCbacBanner-U1_86rYd.js";import"./makeExternalStore-BV9yhKos.js";import"./Tooltip-BH0oVEvo.js";import"./PopoverPopup-lyWlzaf2.js";import"./debounce-DZdiCLET.js";import"./useOsdkClient-BvYrFbaa.js";import"./tick-DnbT_4uE.js";import"./DropdownField-XtSPv3vQ.js";import"./isEqual-DAf5nCSq.js";import"./withOsdkMetrics-CN3Oviww.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
