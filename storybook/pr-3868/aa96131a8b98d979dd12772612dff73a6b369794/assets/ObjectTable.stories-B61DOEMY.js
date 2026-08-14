import{j as i}from"./iframe-D9kZ7oKm.js";import{O as p}from"./object-table-HyBNt6Bd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BX87lqSN.js";import"./preload-helper-D_9croem.js";import"./Table-CVpneVrz.js";import"./index-CqRud9uD.js";import"./Dialog-CMCjCn82.js";import"./cross-ByBOsUt4.js";import"./svgIconContainer-rMQ6NxoF.js";import"./useBaseUiId-DLiXg0iE.js";import"./InternalBackdrop-D7Ibl6C8.js";import"./composite-CU2VzQxk.js";import"./index-BL5TYGry.js";import"./index-BV8mxMmV.js";import"./index-DsSF8vUG.js";import"./useEventCallback-C8WcoY1r.js";import"./SkeletonBar-HLzWfj0a.js";import"./LoadingCell-B8EAoDQi.js";import"./ColumnConfigDialog-C5qy0MIc.js";import"./DraggableList-CC6elubs.js";import"./search-ZNDSswQj.js";import"./Input-nS1tbIyp.js";import"./useControlled-D_VX6z4f.js";import"./Button-BnTkb7kw.js";import"./small-cross-BfnjmzBW.js";import"./ActionButton-B0s3IOvu.js";import"./Checkbox-B-P9jrJ1.js";import"./useValueChanged-FHgTPL1b.js";import"./CollapsiblePanel-DPN6Z6g8.js";import"./MultiColumnSortDialog-CyjQTp2z.js";import"./MenuTrigger-Di-PM5s_.js";import"./CompositeItem-CzKJLAoA.js";import"./ToolbarRootContext-DGR2lftI.js";import"./getDisabledMountTransitionStyles-BQH6Qqz6.js";import"./getPseudoElementBounds-D59qIKV1.js";import"./chevron-down-CObaMvlQ.js";import"./index-Bi1PFb4u.js";import"./error-BUXoxIB7.js";import"./BaseCbacBanner-DdglVscp.js";import"./makeExternalStore-SKHEbBrI.js";import"./Tooltip-8Ot-UkKt.js";import"./PopoverPopup-DPlFv7d_.js";import"./debounce-DXt5GRwA.js";import"./useOsdkClient-C0ObZPai.js";import"./tick-B52iWNIF.js";import"./DropdownField-CIgkZQut.js";import"./isEqual-CaRdeTqX.js";import"./withOsdkMetrics-BCGwBrf8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
