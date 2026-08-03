import{j as i}from"./iframe-zzdLRRkP.js";import{O as p}from"./object-table-BzoQW25r.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CfFWGJmC.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BjUiZie4.js";import"./index-D834FBro.js";import"./Dialog-nmnWVVXh.js";import"./cross-vN4VZOfj.js";import"./svgIconContainer-Dj084qxv.js";import"./useBaseUiId-CtmDVctP.js";import"./InternalBackdrop-DcGb9eKs.js";import"./composite-Bpyg1XgY.js";import"./index-BtoPQHyd.js";import"./index-Cs6OfdLi.js";import"./index-It3254XJ.js";import"./useEventCallback-BMphHyc_.js";import"./SkeletonBar-23_67DFq.js";import"./LoadingCell-BX0kCZQ3.js";import"./ColumnConfigDialog-BTRijRXv.js";import"./DraggableList-yGuNd3Rm.js";import"./search-DCKy7lD2.js";import"./Input-C0n4iBu6.js";import"./useControlled-7B1FZy-i.js";import"./isEqual-bi7MFZ9t.js";import"./isObject-DobLPpHh.js";import"./Button-CcJGTlv_.js";import"./ActionButton-CF21XwFg.js";import"./Checkbox--n1C5hfs.js";import"./useValueChanged-Bpxae_nB.js";import"./CollapsiblePanel-CX4Wt1HL.js";import"./MultiColumnSortDialog-ggUESPjs.js";import"./MenuTrigger-Cr774_KN.js";import"./CompositeItem-D0JUxwMy.js";import"./ToolbarRootContext-COFb6wXq.js";import"./getDisabledMountTransitionStyles-TAsBM5_j.js";import"./getPseudoElementBounds-BW1YzDPn.js";import"./chevron-down-DAiMDPPn.js";import"./index-CAKjNa2w.js";import"./error-CkMO6fn3.js";import"./BaseCbacBanner-3I2qRQio.js";import"./makeExternalStore-CR1iUPPm.js";import"./Tooltip-BO3ZGQ3g.js";import"./PopoverPopup-CduWOMhP.js";import"./toNumber-CE1YwZfA.js";import"./useOsdkClient-CheHNZLh.js";import"./tick-YiG10Me9.js";import"./DropdownField-DgKKM3bG.js";import"./withOsdkMetrics-DfG4PBxp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
