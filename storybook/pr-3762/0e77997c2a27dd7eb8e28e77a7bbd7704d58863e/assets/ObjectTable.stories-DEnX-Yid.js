import{j as i}from"./iframe-Dtkqspnq.js";import{O as p}from"./object-table-DiHqFcSM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-aGhI43zo.js";import"./preload-helper-CMjwTO2l.js";import"./Table-DI_lBPB0.js";import"./index-O6kMzL-B.js";import"./Dialog-BxJLX5gJ.js";import"./cross-RSYUfYNl.js";import"./svgIconContainer-7kIDCLLr.js";import"./useBaseUiId-BA2Wb1vw.js";import"./InternalBackdrop-BuFxK96J.js";import"./composite-C43fxzlr.js";import"./index-BK1pEJ_2.js";import"./index-DnTpAg1q.js";import"./index-CNSyaydD.js";import"./useEventCallback-CdXupzoB.js";import"./SkeletonBar-C9wlHxAM.js";import"./LoadingCell-CcqRQaB-.js";import"./ColumnConfigDialog-CzVJq6uj.js";import"./DraggableList-upkd7pkh.js";import"./search-BdsiJdsL.js";import"./Input-BQhqp0i4.js";import"./useControlled-DsSZ6QOu.js";import"./isEqual-flx9m8JW.js";import"./isObject-BWu7U3TW.js";import"./Button-GHfwW4ze.js";import"./ActionButton-BbMkmZ8Y.js";import"./Checkbox-CwYXbW0D.js";import"./useValueChanged-BA9uiMY5.js";import"./CollapsiblePanel-BCuoLOAT.js";import"./MultiColumnSortDialog-Rm7UzozG.js";import"./MenuTrigger-BKQQaiOA.js";import"./CompositeItem-C-3HiIeo.js";import"./ToolbarRootContext-BVt7FkS8.js";import"./getDisabledMountTransitionStyles-BeMvHOSS.js";import"./getPseudoElementBounds-BOhqKyIV.js";import"./chevron-down-Beub6QMI.js";import"./index-BzmK8_eD.js";import"./error-D0-EM7fN.js";import"./BaseCbacBanner-CpEldF-7.js";import"./makeExternalStore-CpwKRFYJ.js";import"./Tooltip-BrhYXS_I.js";import"./PopoverPopup-YNJds1hs.js";import"./toNumber-BWA8ft4y.js";import"./useOsdkClient-Du0uLL2W.js";import"./tick-BZpmxQ9o.js";import"./DropdownField-CFRjAz-l.js";import"./withOsdkMetrics-bTLqPtnq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
