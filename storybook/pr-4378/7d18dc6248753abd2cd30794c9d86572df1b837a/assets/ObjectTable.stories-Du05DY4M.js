import{j as i}from"./iframe-CNsFCmRD.js";import{O as p}from"./object-table-DstampKG.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BSJENfDt.js";import"./preload-helper-B3EQxtCm.js";import"./Table-Dgn2vo8F.js";import"./index-DehS0r9u.js";import"./Dialog-njFU-RsG.js";import"./cross-BgW6BP2I.js";import"./svgIconContainer-BLE7kABU.js";import"./useBaseUiId-DIFzx6WD.js";import"./InternalBackdrop-DlN7xffD.js";import"./composite-Difoiya5.js";import"./index-B7uESB1d.js";import"./index-Bu5_opre.js";import"./index-BV9ZuCbx.js";import"./useEventCallback-DRTsw9WP.js";import"./SkeletonBar-CVDn_hln.js";import"./LoadingCell-CVwdJWtD.js";import"./ColumnConfigDialog-C-bJHr5P.js";import"./DraggableList-DrJzXDE_.js";import"./search-D35U4f_q.js";import"./Input-DAosEkIl.js";import"./useControlled-DkXcDe2n.js";import"./Button-g1ae3uCc.js";import"./small-cross-N6zuJUXf.js";import"./ActionButton-C58Jqytf.js";import"./Checkbox-DZMuniEK.js";import"./useValueChanged-BQU9nMqw.js";import"./CollapsiblePanel-Dl7L2YAZ.js";import"./MultiColumnSortDialog-B_U1GzVy.js";import"./MenuTrigger-CIV0rhl6.js";import"./CompositeItem-PSR5eG0p.js";import"./ToolbarRootContext-DMD9u7kY.js";import"./getDisabledMountTransitionStyles-FanyKRLk.js";import"./getPseudoElementBounds-BDmo4YIs.js";import"./chevron-down-CgfsyRf8.js";import"./index-D9KhH6vm.js";import"./error-bpMZEwT_.js";import"./BaseCbacBanner-Bn09Oi1T.js";import"./makeExternalStore-V3MhvWul.js";import"./Tooltip-DXHkZovs.js";import"./isObject-DA6ucP6Z.js";import"./debounce-BZlJnoz_.js";import"./useOsdkClient-CvQAwD1B.js";import"./tick-B2tOyb01.js";import"./DropdownField-BeeT3wky.js";import"./isEqual--rV8x3RZ.js";import"./_baseIsEqual-DXkaLe8p.js";import"./withOsdkMetrics-DhWG7RdG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
