import{j as i}from"./iframe-BuOHRKsP.js";import{O as p}from"./object-table-Dh5uZT37.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CYoWfZjq.js";import"./preload-helper-D55cUpwl.js";import"./Table-4GqQvA83.js";import"./index-BBfXYKOl.js";import"./Dialog-BoyspaYP.js";import"./cross-BRcFo6DS.js";import"./svgIconContainer-Nml_YWLq.js";import"./useBaseUiId-D4iw-mlj.js";import"./InternalBackdrop-BxXZhSIT.js";import"./composite-B1qo73Ui.js";import"./index-DfhwtYnd.js";import"./index-l9rhgyQ3.js";import"./index-BuDougKq.js";import"./useEventCallback-_FbLDc9d.js";import"./SkeletonBar-8IqkC77G.js";import"./LoadingCell-lHm284pn.js";import"./ColumnConfigDialog-4l9xpm6q.js";import"./DraggableList-DkZp2fJx.js";import"./search-BuBL3EQ9.js";import"./Input-DcZ1PnWt.js";import"./useControlled-bWISvX2W.js";import"./isEqual-B8V58-SC.js";import"./isObject-Cxa4M8A5.js";import"./Button-DaTxS74m.js";import"./ActionButton-BIw-HXWG.js";import"./Checkbox-xauC_CBS.js";import"./useValueChanged-fHZRy_TU.js";import"./CollapsiblePanel-BFq7mLRQ.js";import"./MultiColumnSortDialog-Cm1NN1Vr.js";import"./MenuTrigger-B7e8WWT3.js";import"./CompositeItem-CaeozsZB.js";import"./ToolbarRootContext-Cs3xyXej.js";import"./getDisabledMountTransitionStyles-LZAqiDzF.js";import"./getPseudoElementBounds-gD1Rdf0Y.js";import"./chevron-down-CxHFRpwG.js";import"./index-DrlXNLRO.js";import"./error-BSxgzHvg.js";import"./BaseCbacBanner-KeqlOfhu.js";import"./makeExternalStore-DTc4l4C7.js";import"./Tooltip-jkjAhTBw.js";import"./PopoverPopup-CAaSEamS.js";import"./toNumber-CBd-AFVs.js";import"./useOsdkClient-DaTm5Mi6.js";import"./tick-j8abGY1t.js";import"./DropdownField-DOyDaEa4.js";import"./withOsdkMetrics-DZ1nPowA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
