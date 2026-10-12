import{j as i}from"./iframe-8RY7zcAm.js";import{O as p}from"./object-table-CbV4Ilqn.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-pBftV-Sb.js";import"./preload-helper-BGkfdM1d.js";import"./Table-CqiF0OH7.js";import"./index-F16GWZJ_.js";import"./Dialog-H50YXpLu.js";import"./cross-aMDWg1-0.js";import"./svgIconContainer-Bnw3Cx_6.js";import"./useBaseUiId-D3Is5SDV.js";import"./InternalBackdrop-CEKxxXVK.js";import"./composite-BDnjYEG7.js";import"./index-DR56g2UK.js";import"./index-CFR66S1o.js";import"./index-Cp_HTgiP.js";import"./useEventCallback-DbbrRawA.js";import"./SkeletonBar-Bkq728Iu.js";import"./LoadingCell-BcGa5QXD.js";import"./ColumnConfigDialog-DzrGm4d-.js";import"./DraggableList-CMpifBio.js";import"./search-C17XLT_W.js";import"./Input-CMi9rgRv.js";import"./useControlled-knRgQYvS.js";import"./Button-CAL7_9_d.js";import"./small-cross-BtCoVVKf.js";import"./ActionButton-D-4IyjVA.js";import"./Checkbox-BfbxkGOa.js";import"./useValueChanged-Do7jw3sZ.js";import"./CollapsiblePanel-C2F04vFW.js";import"./MultiColumnSortDialog-BovWGrT4.js";import"./MenuTrigger-D5_b2zNs.js";import"./CompositeItem-CgF-gvX4.js";import"./ToolbarRootContext-xvpkFEWT.js";import"./getDisabledMountTransitionStyles-C7O4Eqmv.js";import"./getPseudoElementBounds-Cf6FS6bo.js";import"./chevron-down-h5bw2Tva.js";import"./index-RRcFr7Yl.js";import"./error-DN4E4s-5.js";import"./BaseCbacBanner-BmgMkMuj.js";import"./makeExternalStore-C5QucHCB.js";import"./Tooltip-BlXoDKth.js";import"./PopoverPopup-BTcWcv1_.js";import"./debounce-B7Gynz3E.js";import"./useOsdkClient-P54WfxAq.js";import"./tick-5ikQBC0o.js";import"./DropdownField-0aYp1GEb.js";import"./isEqual-DlaxxFzG.js";import"./withOsdkMetrics-DZUKZj-t.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
