import{j as i}from"./iframe-DuF9ULT7.js";import{O as p}from"./object-table-BfPXsznY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DCKRsIST.js";import"./preload-helper-kD_tsguj.js";import"./Table-Ck3oDQZz.js";import"./index-muXsy8in.js";import"./Dialog-C4PvVf4N.js";import"./cross-CWdW2uUC.js";import"./svgIconContainer-Cg0DvcJX.js";import"./useBaseUiId-toBz8Uh9.js";import"./InternalBackdrop-DAn5w1fs.js";import"./composite-B1SRd4gq.js";import"./index-CQs0rdO8.js";import"./index-DaCqd03Q.js";import"./index-D5Uc12e6.js";import"./useEventCallback-CNUkj118.js";import"./SkeletonBar-CgHloKeI.js";import"./LoadingCell-D_nqtry4.js";import"./ColumnConfigDialog-B_SLMB2N.js";import"./DraggableList-Bi7JcdoK.js";import"./search-BijdxR6R.js";import"./Input-Cz82mbXb.js";import"./useControlled-DjU5snnM.js";import"./Button-BZjuNt0h.js";import"./small-cross-DUrm4kRJ.js";import"./ActionButton-CX87U3oR.js";import"./Checkbox-Dai2y2mJ.js";import"./useValueChanged-Cn14tmvW.js";import"./CollapsiblePanel-DBem6MQm.js";import"./MultiColumnSortDialog-D2TaUp4Q.js";import"./MenuTrigger-l9somBBq.js";import"./CompositeItem-lLhT8JrE.js";import"./ToolbarRootContext-4pjZNXLZ.js";import"./getDisabledMountTransitionStyles-BJaQXL8u.js";import"./getPseudoElementBounds-BUh7K_dy.js";import"./chevron-down-CaPJ8T2H.js";import"./index-B-a6xU5p.js";import"./error-BLlGlY0w.js";import"./BaseCbacBanner-BrhvEN2m.js";import"./makeExternalStore-BjN8YBiO.js";import"./Tooltip-BNXMXQEy.js";import"./PopoverPopup-mneHcQVw.js";import"./debounce-CrZBwGro.js";import"./useOsdkClient-BSXkMVIu.js";import"./tick-D563aBAq.js";import"./DropdownField-BF8fdmfG.js";import"./isEqual-Bfv2CuL1.js";import"./withOsdkMetrics-BCYo5O_x.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
