import{j as i}from"./iframe-pYM9Kle3.js";import{O as p}from"./object-table-Dg8X1YLC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Xmyw2AlE.js";import"./preload-helper-D5KvRmWw.js";import"./Table-r_TjHfFz.js";import"./index-aGm8-TAF.js";import"./Dialog-DL97wxmD.js";import"./cross-BnBrW-eg.js";import"./svgIconContainer-C_8arsQh.js";import"./useBaseUiId-RIZ0yVnd.js";import"./InternalBackdrop-DIPX0H2i.js";import"./composite-sTRtyjQk.js";import"./index-W-KSUEkN.js";import"./index-BOW_h0zx.js";import"./index-05AG5g9M.js";import"./useEventCallback-D8yjtfXj.js";import"./SkeletonBar-BK9B7HSX.js";import"./LoadingCell-CN61tLvp.js";import"./ColumnConfigDialog-CURzWvFL.js";import"./DraggableList-pKSWkaE1.js";import"./search-DhM0Kz_K.js";import"./Input-CwD97Qzu.js";import"./useControlled-BncmKvh2.js";import"./isEqual-3I2_tgp7.js";import"./isObject-CgQKXRFD.js";import"./Button-CU-ddK4J.js";import"./ActionButton-BKxfDdu4.js";import"./Checkbox-CZptYZXi.js";import"./useValueChanged-CWxRqVfZ.js";import"./CollapsiblePanel-o9ZfF3wl.js";import"./MultiColumnSortDialog-B89-LTwa.js";import"./MenuTrigger-6lJzNeVm.js";import"./CompositeItem-Cx5UxeIi.js";import"./ToolbarRootContext-B9CW3s9P.js";import"./getDisabledMountTransitionStyles-RZdmxJEf.js";import"./getPseudoElementBounds-D-2Wx9v7.js";import"./chevron-down-BISeLNQR.js";import"./index-CS1mNa9j.js";import"./error-BxZYQlfA.js";import"./BaseCbacBanner-Dfp89-qt.js";import"./makeExternalStore-BkiGOiIS.js";import"./Tooltip-XQHWhF0b.js";import"./PopoverPopup-BJDqIkbD.js";import"./toNumber-BgnxX0iA.js";import"./useOsdkClient-BD1XYN6K.js";import"./tick-BiUS3pKu.js";import"./DropdownField-BFRZdytN.js";import"./withOsdkMetrics-DOlv4fq5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
