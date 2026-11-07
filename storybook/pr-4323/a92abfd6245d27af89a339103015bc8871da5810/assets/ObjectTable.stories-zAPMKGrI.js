import{j as i}from"./iframe-DQCdqfg5.js";import{O as p}from"./object-table-D2fFBTXM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C0mo33VC.js";import"./preload-helper-BnuMKywq.js";import"./Table-eSFOwLQi.js";import"./index-vgggs2zv.js";import"./Dialog-Be0MXF1L.js";import"./cross-BM5-gN2O.js";import"./svgIconContainer-DQ3vDY3d.js";import"./useBaseUiId-uJtwceXU.js";import"./InternalBackdrop-mKo4eMuU.js";import"./composite-CLQo-Wfa.js";import"./index-BsqPh63C.js";import"./index-TXPEMxyc.js";import"./index-DkmdKJbM.js";import"./useEventCallback-DI2LvAvB.js";import"./SkeletonBar-BMXSVux8.js";import"./LoadingCell-DAvwNT84.js";import"./ColumnConfigDialog-GU-s4XaF.js";import"./DraggableList-vr-wvdOw.js";import"./search-BVksAAy0.js";import"./Input-BTifrhUx.js";import"./useControlled-ChMbt_Fz.js";import"./Button-DNN3wzC1.js";import"./small-cross-B8kNhtpM.js";import"./ActionButton-8qbOBxU2.js";import"./Checkbox-DSNDjp2T.js";import"./useValueChanged-BB3_bFNq.js";import"./CollapsiblePanel-B0RAMB_a.js";import"./MultiColumnSortDialog-CXJqFtZO.js";import"./MenuTrigger-SW6vTO-P.js";import"./CompositeItem-BV9j03E3.js";import"./ToolbarRootContext-DIjdh_Ow.js";import"./getDisabledMountTransitionStyles-BryvnPSi.js";import"./getPseudoElementBounds-SCb5Bi3b.js";import"./chevron-down-s9at5FCB.js";import"./index-C7x5V-MA.js";import"./error-LGbg2EdJ.js";import"./BaseCbacBanner-CIJ1yjYq.js";import"./makeExternalStore-DhC3eF_c.js";import"./Tooltip-F2HH1cxW.js";import"./PopoverPopup-CvC35ehe.js";import"./debounce-DHf3w8rI.js";import"./useOsdkClient-DpwLfZR6.js";import"./tick-BNBx5Vf4.js";import"./DropdownField-NOLN6HRJ.js";import"./isEqual-oQJ7iNOI.js";import"./withOsdkMetrics-B1flG_2m.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
